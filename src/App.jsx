import Navbar from "./components/navbar"
import CreateProject from "./views/createProject";
import HomePage from "./views/homePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return(
    <Router>

      <Navbar />
      <main className="container mx-auto p-8">

        <Routes>
          
          <Route path="/" element={<HomePage />} />
          <Route path="/newproject" element={<CreateProject />} />

        </Routes>
      </main>
    </Router>
  )
}

export default App
