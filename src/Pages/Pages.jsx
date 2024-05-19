import { Route,Routes } from "react-router-dom"
import LandingPage from "./LandingPage/LandingPage"
import ExcerciseDetailsPage from "./ExcerciseDetailsPage/ExcerciseDetailsPage"
import AboutUs from "./AboutUs/AboutUs"
const Pages = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/:id" element={<ExcerciseDetailsPage/>} />
        <Route path="/about" element={<AboutUs/>}/>
    </Routes>
  )
}

export default Pages