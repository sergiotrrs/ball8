import { showItems } from "../items/showItems";

const setup = () => {
  const main = document.querySelector("#main");
  const loader = document.querySelector("#loader");
  loader.classList.add("hidden");
  main.style.display = "block";
  showItems();
};

export { setup };
