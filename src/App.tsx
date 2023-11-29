import { FC } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SiteNav from "./components/SiteNav"
import Home from "./views/Home"
import SignUp from "./views/SignUp"

const App: FC = () => {
  return (
    <BrowserRouter>
      {/* {hasSign ? <OutHeader /> : <InHeader />} */}
      <SiteNav />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
