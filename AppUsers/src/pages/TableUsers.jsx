
import { useUsers } from "../hooks/useUsers"

export const TableUsers = () => {

  const { users } = useUsers();
  console.log(users);
  

  return (
    <div>TableUsers</div>
  )
}
