import reactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";
import UserContext from "./Contexts/UserContext";
import "./reset.css"
import Entrada from "./Components/Entrada";
import Saida from "./Components/Saida";


function App() {
    const [token, setToken] = useState(null);
    return (
        <>
            <BrowserRouter>
                <UserContext.Provider value={{ token, setToken }}>
                    <Routes>
                        <Route path="/" element={<SignIn />} />
                        <Route path="/SignUp" element={<SignUp />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/Entrada" element={<Entrada />} />
                        <Route path="/Saida" element={<Saida />} />
                    </Routes>
                </UserContext.Provider>
            </BrowserRouter>
        </>
    )
}

reactDOM.render(<App />, document.querySelector(".root"));