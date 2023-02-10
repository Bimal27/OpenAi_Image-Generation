import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AddPost from "./Components/AddPost/AddPost";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<AddPost />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
