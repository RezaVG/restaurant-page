import Card1 from "./cards/card1";

export default function menu() {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");

  menuDiv.appendChild(Card1());
  return menuDiv;
}
