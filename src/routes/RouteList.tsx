
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AllBooks from "../pages/AllBooks";
import EditBook from "../pages/EditBook";
import PrivateRoute from "./PrivateRoute";
import BookDetails from "../pages/BookDetails";
import SignUp from "../pages/Signup";
import Login from "../pages/Login";
import Notfound from "../pages/Notfound";


const RouteList = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/all-books" element={<PrivateRoute><AllBooks /></PrivateRoute>}></Route>
                <Route path="/edit-book/:id" element={<PrivateRoute><EditBook /></PrivateRoute>}></Route>
                <Route path="/book-details/:id" element={<BookDetails />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="*" element={<Notfound />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteList;