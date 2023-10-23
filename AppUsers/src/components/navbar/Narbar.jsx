import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
export const Narbar = () => {

  const [isView, setIsView] = useState(true);

  useEffect(() => {
    const handleResize = () =>  {
      const screenWidth = window.innerWidth;
      if(screenWidth <= 1024) {
        setIsView(false);
      } else {
        setIsView(true);
      }
    }

    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <nav className="bg-light 2xl:flex 2xl:justify-center">
        <div className="flex items-center justify-between flex-wrap max-w-screen-2xl p-6 w-full">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Link to="/" className="font-semibold text-xl tracking-tight">Prueba Técnica</Link>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-yellow hover:border-yellow" onClick={() => setIsView(!isView)}>
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            {
              isView && (
                <div className="text-md lg:flex-grow">
                  <Link to="/" className="transition-all duration-300 ease-in block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow hover:underline underline-offset-8 mr-4">
                    Inicio
                  </Link>
                  <Link to="/tabla" className="transition-all duration-300 ease-in block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow hover:underline underline-offset-8 mr-4">
                    Tabla de Usuarios
                  </Link>
                  <Link to="/tarjetas" className="transition-all duration-300 ease-in block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow hover:underline underline-offset-8">
                    Tarjeta de Usuarios
                  </Link>
                </div>
              )
            }

          </div>
        </div>

      </nav>
    </>
  )
}
