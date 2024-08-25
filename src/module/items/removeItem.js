import { getItems } from "../localStorage/getItems";
import { setItems } from "../localStorage/setItems";
import { showItems } from "./showItems";



export const removeItem = () => {
    const users = getItems();
    const numberToRemove = parseInt(prompt('Enter a number to remove:'));    
    if (numberToRemove) {
        const index = numberToRemove - 1;
        if (index !== -1) {
            users.splice(index, 1);
            setItems(users);
            showItems();
        }
    }
}
