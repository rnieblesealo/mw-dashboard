import { BrowserRouter, Routes, Route } from "react-router-dom"

import { SignIn } from "./pages/SignIn"
import { Layout } from "./util/Layout"
import { Home } from "./pages/Home"

/* --- GUIDE -----------------------------------------------------------------------
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Home />} />
          <Route path="/view/:songId" element={<DetailView />} />
          <Route path="/review/:songId/create" element={<CreateReview />} />
          <Route path="/review/:songId/edit/:reviewId" element={<CreateReview />} />
        </Route>
      </Routes>
    </BrowserRouter>
*/

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
