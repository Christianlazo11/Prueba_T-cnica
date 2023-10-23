import { useUsers } from "../../hooks/useUsers"

export const CardModalInfo = () => {

    const { setViewModal, userModal } = useUsers();

    return (
        <div className="fullscreen-modal bg-dark z-50 bg-opacity-80 background-blur-lg">
            <div className="bg-light rounded-md py-5 px-5 text-white">
                <div>
                    <span>Nombre: </span>
                    <span>{userModal.name}</span>
                </div>
                <div>
                    <span>Usuario: </span>
                    <span>{userModal.username}</span>
                </div>
                <div>
                    <span>Correo: </span>
                    <span>{userModal.email}</span>
                </div>
                <div>
                    <span>Telefono: </span>
                    <span>{userModal.phone}</span>
                </div>
                <div>
                    <span>Web: </span>
                    <span>{userModal.website}</span>
                </div>
                <div>
                    <span>Compañia: </span>
                    <span>{userModal.company.name}</span>
                </div>
                <div>
                    <span>Frase: </span>
                    <span>{userModal.company.catchPhrase}</span>
                </div>
                <div>
                    <span>Calle: </span>
                    <span>{userModal.address.street}</span>
                </div>
                <div>
                    <span>Suite: </span>
                    <span>{userModal.address.suite}</span>
                </div>
                <div>
                    <span>Ciudad: </span>
                    <span>{userModal.address.city}</span>
                </div>
                <div>
                    <span>Código postal: </span>
                    <span>{userModal.address.zipcode}</span>
                </div>

                <div className="mt-4 flex justify-center">
                    <button className="bg-yellow rounded-3xl py-2 px-4 hover:translate-x-3 transition ease-in-out delay-100"
                        onClick={() => setViewModal(false)}>Cerrar</button>
                </div>
            </div>

        </div>
    )
}
