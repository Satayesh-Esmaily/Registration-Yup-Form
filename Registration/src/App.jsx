import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />      
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<div>Page Not Found</div>} /> 
      </Routes>
    </BrowserRouter>
  );
}