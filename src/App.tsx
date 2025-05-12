import { BrowserRouter, Routes, Route } from "react-router-dom"

import { SignIn } from "./pages/SignIn"
import { Layout } from "./util/Layout"
import { Home } from "./pages/Home"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
