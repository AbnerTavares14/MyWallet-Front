import reactDOM from "react-dom";
import 'reset-css';
import SignUp from "./Components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/SignUp" element={<SignUp/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

reactDOM.render(<App/>, document.querySelector(".root"));