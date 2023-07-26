import { Route,Routes } from "react-router-dom"
import LandingPage from "./LandingPage/LandingPage"
import ExcerciseDetailsPage from "./ExcerciseDetailsPage/ExcerciseDetailsPage"
const Pages = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/:id" element={<ExcerciseDetailsPage/>} />

    </Routes>
  )
}

export default Pages