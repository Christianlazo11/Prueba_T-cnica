
import { useEffect} from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Narbar } from "./components/navbar/Narbar";
import { Footer } from "./components/footer/Footer";
import { CardsUser } from "./pages/CardsUser";
import { TableUsers } from "./pages/TableUsers";
import { Home } from "./pages/Home";
import { getDataUsers } from "./services/serviceUsers";
import { useUsers } from "./hooks/useUsers";


function App() {

  const {users, setUsers} = useUsers();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getDataUsers();
        setUsers(response.data);
      } catch(err) {
        console.log(err);
      }
    }

    getData();
    
  }, []);

  console.log(users);
  return (
    <BrowserRouter>

      <Narbar />
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/tabla" element={<CardsUser/>}/>
        <Route path="/tarjetas" element={<TableUsers/>}/>

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
