import Count from "./components/Count"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Appointments from "./pages/Appointments"
import PopularTeachers from "./pages/OurTeachers"
import Teacher from "./pages/Teacher"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Quiz_Questions from "./QUIZAPP/Quiz_Questions"

const App = () => {
  return (
    <div className="w-full flex text-backColor min-h-screen flex-col relative">
      <BrowserRouter>
        <NavBar />
        <Home />
        <PopularTeachers />
        <Teacher />
        <Appointments />
        <Count />
        <Routes>
          <Route exact path="/quizApp" element={<Quiz_Questions></Quiz_Questions>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
