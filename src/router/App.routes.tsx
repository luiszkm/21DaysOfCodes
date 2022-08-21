import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home/"
import { Projects } from "../Pages/Projects"
import { Day02 } from "../Pages/Day02_HelloWorld"
import { Day03 } from "../Pages/Day03_ButtonAnimation"


export function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/day02_hello_world" element={< Day02/>} />
      <Route path="/day03_button_animation" element={< Day03/>} />
    </Routes>
  )
}