import { getServerSession } from "next-auth/next"

export default async function HomePage() {
  const session = await getServerSession()
  const email = session?.user?.email

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <h1 className="mb-8 text-4xl font-bold text-gray-800">
        Welcome to 507 Photos
      </h1>

      <main>
        {
          email ? (
            <p>Welcome, {email}!</p>
          ) : (
            <p>You are not signed in.</p>
          )
        }
      </main>
    </div>
  )
}
