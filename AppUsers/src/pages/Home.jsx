import { Link } from "react-router-dom";

import { ContainerAll } from "../layout/ContainerAll";
import { FaTable, FaIdCard } from "react-icons/fa";
export const Home = () => {

  return (
    <ContainerAll>
      <div className="min-h-screen w-full max-w-screen-2xl flex flex-row flex-wrap gap-10 py-5 justify-center items-center">
        <div className="bg-gray card__animate h-80 basis-3/4 md:basis-5/12 lg:basis-1/4 py-3 px-2 rounded-xl">
          <div className="flex justify-center items-center py-4">
            <FaTable className="text-9xl text-white" />
          </div>
          <div className="flex justify-center items-center pt-5">
            <Link to="/tabla" className="text-white text-center text-xl cursor-pointer">
              <button className="bg-yellow rounded-3xl py-2 px-4 hover:translate-x-3 transition ease-in-out delay-100">
                Ver usuarios en Tabla
              </button>
            </Link>
          </div>

        </div>
        <div className="bg-gray card__animate h-80 basis-3/4 md:basis-5/12 lg:basis-1/4 py-3 px-2 rounded-xl">
          <div className="flex justify-center items-center py-4">
            <FaIdCard className="text-9xl text-white" />
          </div>
          <div className="flex justify-center items-center pt-5">
            <Link to="tarjetas" className="text-white text-center text-xl cursor-pointer">
              <button className="bg-yellow rounded-3xl py-2 px-4 hover:translate-x-3 transition ease-in-out delay-100">
                Ver usuarios en tarjetas
              </button>
            </Link>
          </div>

        </div>
      </div>
    </ContainerAll>

  )
}
