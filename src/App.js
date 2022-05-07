import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Components/Pages/Blogs/Blogs/Blogs";
import Home from "./Components/Pages/Home/Home/Home";
import AddItem from "./Components/Pages/Items/AddItem/AddItem";
import Inventories from "./Components/Pages/Items/Inventories/Inventories";
import ItemDetails from "./Components/Pages/Items/ItemDetails/ItemDetails";
import ManageItems from "./Components/Pages/Items/ManageItems/ManageItems";
import Login from "./Components/Pages/Login/Login/Login";
import SignUp from "./Components/Pages/Login/SignUp/SignUp";
import Footer from "./Components/Pages/Shared/Footer/Footer";
import Header from "./Components/Pages/Shared/Header/Header";
import NotFound from "./Components/Pages/Shared/NotFound/NotFound";
import RequireAuth from "./Components/Pages/Shared/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/item/:itemId"
          element={
            <RequireAuth>
              <ItemDetails />
            </RequireAuth>
          }
        ></Route>
        <Route path="/inventories" element={<Inventories />}></Route>
        <Route
          path="/additem"
          element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageitems"
          element={
            <RequireAuth>
              <ManageItems />
            </RequireAuth>
          }
        ></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
