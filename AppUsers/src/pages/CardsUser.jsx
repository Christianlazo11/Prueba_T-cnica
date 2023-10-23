import { ContainerAll } from "../layout/ContainerAll";
import { Carousel } from "../components/cards/Carousel";
import { CardModalInfo } from "../components/cards/CardModalInfo";
import { useUsers } from "../hooks/useUsers";

export const CardsUser = () => {

  const {viewModal} = useUsers();

  return (
    <ContainerAll>
      <div className="min-h-screen h-full w-full max-w-screen-2xl flex items-center">
      
        <Carousel/>
        {
          viewModal && <CardModalInfo />
        }
        
      </div>
    </ContainerAll>

  )
}
