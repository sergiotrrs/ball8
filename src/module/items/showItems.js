import { namesListElement } from "../dom/elements";
import { getItems } from "../localStorage/getItems";

const showItems = () => {
  namesListElement.innerHTML = "";
  const users = getItems();
  users.forEach(({ firstName, lastName, selectedCount }, index) => {
    const listItem = document.createElement("tr");
    listItem.innerHTML = `
            <th scope="row">${index + 1}</th>
            <td>${firstName}</td>
            <td>${lastName}</td>
        `;
    namesListElement.appendChild(listItem);
  });
};

export { showItems };
