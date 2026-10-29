let today = new Date();
let year = document.querySelector("#currentyear");
year.innerHTML = `${today.getFullYear()}</span>`;

document.getElementById("lastModified").textContent = document.lastModified;
