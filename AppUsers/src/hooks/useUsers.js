import { useContext } from "react";
import UserContext from "../Context/UsersProvider";

export const useUsers = () => {
    return useContext(UserContext);
}
