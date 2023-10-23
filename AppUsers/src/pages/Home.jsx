import { Link } from "react-router-dom";
import { useUsers } from "../hooks/useUsers"

import { ContainerAll } from "../layout/ContainerAll";
import { FaTable, FaIdCard } from "react-icons/fa";
export const Home = () => {

  const { users } = useUsers();

  console.log(users);
  return (
    <ContainerAll>
      <div className="min-h-screen w-full max-w-screen-2xl flex flex-row flex-wrap gap-10 py-5 justify-center items-center">
        <div className="bg-gray card__animate h-80 basis-3/4 md:basis-5/12 lg:basis-1/4 py-3 px-2 rounded-xl">
          <div className="flex justify-center items-center py-4">
            <FaTable className="text-9xl text-white" />
          </div>
          <div className="flex justify-center items-center pt-5">
            <Link to="/tabla" className="text-white text-center text-xl cursor-pointer hover:text-yellow">Ver usuarios en Tabla</Link>
          </div>

        </div>
        <div className="bg-gray card__animate h-80 basis-3/4 md:basis-5/12 lg:basis-1/4 py-3 px-2 rounded-xl">
          <div className="flex justify-center items-center py-4">
            <FaIdCard className="text-9xl text-white" />
          </div>
          <div className="flex justify-center items-center pt-5">
            <Link to="tarjetas" className="text-white text-center text-xl cursor-pointer hover:text-yellow">Ver usuarios en tarjetas</Link>
          </div>

        </div>
      </div>
    </ContainerAll>

  )
}
