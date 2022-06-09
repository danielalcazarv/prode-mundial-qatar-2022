import { Route, Routes } from "react-router-dom";
import Banner from "./Banner";
import Landing from "./Landing";
import TablasListContainer from "./TablasListContainer";

const Main = () => {
    return (
        <main>
            <Banner/>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/miprode" element={<TablasListContainer/>}/>
            </Routes>
        </main>
    )
}

export default Main