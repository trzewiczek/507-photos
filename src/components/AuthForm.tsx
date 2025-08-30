"use client"
import { useState } from "react"

type OnSubmitHandler = (email: string, password: string, setError: (msg: string) => void) => Promise<void>

type AuthForm = {
  error?: string
  onSubmit: OnSubmitHandler
  submitLabel: string
  title: string
}

export default function AuthForm({
  error,
  onSubmit,
  submitLabel,
  title,
}: AuthForm) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [localError, setLocalError] = useState(error || "")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLocalError("")

    await onSubmit(email, password, setLocalError)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="w-full mb-4 px-3 py-2 border rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className="w-full mb-4 px-3 py-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {submitLabel}
        </button>

        {(localError || error) && (
          <p className="mt-4 text-red-500 text-center">
            {localError || error}
          </p>
        )}
      </form>
    </div>
  )
}