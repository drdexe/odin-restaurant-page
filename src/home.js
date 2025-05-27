export default function () {
  const contentDiv = document.querySelector("#content");
  const header = document.createElement("h1");
  const containerDiv = document.createElement("div");
  const img = document.createElement("img");
  const para = document.createElement("p");

  header.textContent = "HOME";
  containerDiv.classList.add("home");
  img.src = "https://static.wikitide.net/italianbrainrotwiki/thumb/e/e0/Tralalelo_tralala.png/599px-Tralalelo_tralala.png";
  img.alt = "Tralalero Tralala";
  para.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  containerDiv.appendChild(img);
  containerDiv.appendChild(para);
  contentDiv.appendChild(header);
  contentDiv.appendChild(containerDiv);
}