import { isLoggedIn } from "@/scripts/auth"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Outlet } from "react-router-dom"

export const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // redirect to signin if no user logged in
    async function redirectIfNotSignedIn() {
      await isLoggedIn()
        .then((res) => {
          if (res === false) {
            navigate("/signin");
          }
        })
    }

    redirectIfNotSignedIn()
  }, [navigate])

  return (
    <div>
      <Outlet />
    </div>
  )
}
