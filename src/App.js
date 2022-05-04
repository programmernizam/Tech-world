import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home/Home/Home";
import AddItem from "./Components/Pages/Items/AddItem/AddItem";
import MyItems from "./Components/Pages/Items/MyItems/MyItems";
import Login from "./Components/Pages/Login/Login/Login";
import SignUp from "./Components/Pages/Login/SignUp/SignUp";
import Footer from "./Components/Pages/Shared/Footer/Footer";
import Header from "./Components/Pages/Shared/Header/Header";
import NotFound from "./Components/Pages/Shared/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/myitems" element={<MyItems />}></Route>
        <Route path="/additem" element={<AddItem />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
