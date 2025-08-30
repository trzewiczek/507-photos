"use client"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

import AuthForm from "@/components/AuthForm"

export default function SignInPage() {
  const router = useRouter()

  async function handleSignIn(email: string, password: string, setError: (msg: string) => void) {
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    })

    if (res?.error) {
      setError(res.error)
    } else {
      router.push("/")
    }
  }

  return (
    <AuthForm
      title="Sign In"
      submitLabel="Log In"
      onSubmit={handleSignIn}
    />
  )
}
