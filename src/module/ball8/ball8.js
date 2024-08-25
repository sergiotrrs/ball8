import { getRandomNumber } from "../randomNumber/randomNumber";
import { ballText, ballContainer, selectedItem } from "../dom/elements";
import { getItems } from "../localStorage/getItems";

const ball8 = (event) => {
  ballText.style.opacity = 0;
  selectedItem.style.opacity = 0;
  ballContainer.classList.remove("animate");
  ballText.classList.remove("appear");
  selectedItem.classList.remove("appear");

  setTimeout(function () {
    ballContainer.classList.add("animate");
    ballText.classList.add("appear");
    selectedItem.classList.add("appear");
  }, 100);

  const users = getItems();
  const selectedNumber = getRandomNumber(0, users.length);
  ballText.innerHTML = selectedNumber + 1;
  const {firstName, lastName} = users[selectedNumber]
  selectedItem.innerHTML = `${firstName} ${lastName}` ;
};

export { ball8 };
