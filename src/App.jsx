import About from "./Components/about";
import Contact from "./Components/contact";
import Footer from "./Components/footer";
import Hero from "./Components/hero";
import Info from "./Components/info";
import Navbar from "./Components/navbar";
import RegisterForm from "./Components/RegForm";
import "./App.css";
import StudentList from "./Components/StudentList";
import { useState } from "react";

const App = () => {
  const [students, setStudents] = useState([]);

  const handleRegister = (student) => {
    setStudents((prev) => [...prev, student]);
  };

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Info />
      <RegisterForm onRegister={handleRegister} />
      <StudentList students={students} />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
