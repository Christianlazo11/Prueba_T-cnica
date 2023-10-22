
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Narbar } from "./components/navbar/Narbar";
import { Footer } from "./components/footer/Footer";
import { CardsUser } from "./pages/CardsUser";
import { TableUsers } from "./pages/TableUsers";
import { Home } from "./pages/Home";


function App() {

  return (
    <BrowserRouter>

      <Narbar />
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/cards" element={<CardsUser/>}/>
        <Route path="/table" element={<TableUsers/>}/>

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
