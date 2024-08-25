import { getItems } from "../localStorage/getItems";
import { setItems } from "../localStorage/setItems";
import { showItems } from "./showItems";

export const addItem = () => {
  const names = getItems();
  const newName = prompt("Enter a new name:");
  if (newName) {
    const [firstName, lastName] = newName.split(" ");
    names.push({
      firstName,
      lastName,
      selectedCount: 0,
    });
    setItems(names);
    showItems();
  }
};
