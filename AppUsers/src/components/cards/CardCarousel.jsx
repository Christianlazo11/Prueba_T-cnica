import { FaUserCircle } from "react-icons/fa";
import { useUsers } from "../../hooks/useUsers";

export const CardCarousel = ({ dataUser }) => {

    const { name, username, email, phone, website } = dataUser;
    const {setViewModal, setUserModal} = useUsers();

    const handleModal = () => {
        setViewModal(true)
        setUserModal(dataUser);
    }
    
    return (

        <div className="bg-light h-full w-full text-white rounded-md my-5 py-2 px-4 card_users">
            <div className="text-9xl w-full flex justify-center py-5">
                <FaUserCircle />
            </div>
            <div>
                <span>Nombre: </span>
                {name}
            </div>
            <div>
                <span>Usuario: </span>
                {username}
            </div>
            <div>
                <span>Correo: </span>
                {email}
            </div>
            <div>
                <span>Celular: </span>
                {phone}
            </div>
            <div>
                <span>Web: </span>
                {website}
            </div>

            <div>
                <span>Ciudad: </span>
                {dataUser.address.city}
            </div>

            <div>
                <span>Compañia: </span>
                {dataUser.company.name}
            </div>

            <div className="w-full flex justify-center py-3">
                <button className="bg-yellow rounded-3xl py-2 px-4 hover:translate-x-3 transition ease-in-out delay-100" onClick={handleModal}>Información</button>
            </div>
        </div>


    )
}
