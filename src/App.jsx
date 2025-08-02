import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import BlogPage from "./pages/BlogPage";
import Partner from "./pages/Partner";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Trail from "./pages/Trial";
import Trial from "./pages/Trial";
import HirePage from "./pages/Hirepage";
import JobApplication from "./pages/JobApplication";
import ApplicationSuccess from "./pages/ApplicationSuccess";
// import Features from "./pages/Features";
// import Pricing from "./pages/Pricing";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Trial from "./pages/Trial";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20"> {/* To avoid navbar overlap */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/ca-partner" element={<Partner />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/trial" element={<Trial />} />
          <Route path="/hire" element={<HirePage />} />
          <Route path="/apply/:jobId" element={<JobApplication />} />
          <Route path="/application-success" element={<ApplicationSuccess/>}/>
          {/* <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/trial" element={<Trial />} /> */}
        </Routes>
      </div>
      <Footer/>
    </>
  );
}
