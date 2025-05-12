import { LoginForm } from "@/components/LoginForm"

export const SignIn = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center space-y-8">
      <img
        src="/small-logo.png"
        className="w-32" />
      <LoginForm />
    </div>
  )
}
