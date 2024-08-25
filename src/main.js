import "./scss/styles.scss";
import * as bootstrap from 'bootstrap'

import { ball8 } from "./module/ball8/ball8";
import { setup } from "./module/setup/setup";
import { ball, removeNameButton } from "./module/dom/elements";
import { addNameButton } from "./module/dom/elements";
import { addItem } from "./module/items/addItem";
import { removeItem } from "./module/items/removeItem";

// this waits till the JS has been loaded and then hides the loading "screen"
document.addEventListener("DOMContentLoaded", setup);

ball.addEventListener("click", ball8);

addNameButton.addEventListener("click", addItem );

removeNameButton.addEventListener("click", removeItem );

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))