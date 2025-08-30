import { prisma } from "@/lib/prisma"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { email, password } = await req.json()

  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    return http401()
  }

  const valid = await bcrypt.compare(password, user.hashedPassword ?? "")
  if (!valid) {
    return http401()
  }

  // TODO: Issue session or JWT here

  return NextResponse.json({
    id: user.id,
    email: user.email,
  })
}

function http401() {
  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
}
