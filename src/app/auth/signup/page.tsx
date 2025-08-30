"use client"
import { useRouter } from "next/navigation"

import AuthForm from "@/components/AuthForm"

export default function SignUpPage() {
  const router = useRouter()

  async function handleSignUp(email: string, password: string, setError: (msg: string) => void) {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })

    if (res.ok) {
      router.push("/auth/signin")
    } else {
      const data = await res.json()
      setError(data.error || "Sign up failed")
    }
  }

  return (
    <AuthForm
      title="Sign Up"
      submitLabel="Create Account"
      onSubmit={handleSignUp}
    />
  )
}
