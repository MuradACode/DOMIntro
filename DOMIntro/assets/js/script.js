let body = document.getElementById("body");
body.style.backgroundColor = "lightgray";
let header = document.createElement("header");
body.appendChild(header);
header.setAttribute("style", "display:flex;justify-content:center;margin-top:5rem;")

let form = document.createElement("form");
header.appendChild(form);

let divName = document.createElement("div");
form.appendChild(divName);
let inputName = document.createElement("input");
inputName.setAttribute("type", "text");
inputName.setAttribute("placeholder", "Name");
inputName.style.width = "20rem";
inputName.style.height = "2rem";
inputName.style.borderStyle = "none";
inputName.style.borderRadius = "0.3rem";
inputName.style.marginBottom = "0.5rem";
divName.appendChild(inputName);

let divSurname = document.createElement("div");
form.appendChild(divSurname);
let inputSurname = document.createElement("input");
inputSurname.setAttribute("type", "text");
inputSurname.setAttribute("placeholder", "Surname");
inputSurname.style.width = "20rem";
inputSurname.style.height = "2rem";
inputSurname.style.borderStyle = "none";
inputSurname.style.borderRadius = "0.3rem";
inputSurname.style.marginBottom = "0.5rem";
divSurname.appendChild(inputSurname);

let divPassword = document.createElement("div");
form.appendChild(divPassword);
let inputPassword = document.createElement("input");
inputPassword.setAttribute("type", "password");
inputPassword.setAttribute("placeholder", "Password");
inputPassword.style.width = "20rem";
inputPassword.style.height = "2rem";
inputPassword.style.borderStyle = "none";
inputPassword.style.borderRadius = "0.3rem";
divPassword.appendChild(inputPassword);

let submitButton = document.createElement("button");
submitButton.setAttribute("type", "submit");
submitButton.innerText = "Submit";
submitButton.style.color = "white";
submitButton.style.marginTop = "0.5rem";
submitButton.style.width = "20rem";
submitButton.style.height = "2rem";
submitButton.style.borderStyle = "none";
submitButton.style.borderRadius = "0.3rem";
submitButton.style.backgroundImage = "linear-gradient(to right, pink , orange)";
form.appendChild(submitButton);

let main = document.createElement("main");
main.setAttribute("style", "display:flex;justify-content:center;margin-top:6rem;")
body.appendChild(main);

let ul = document.createElement("ul");
ul.setAttribute("style", "list-style:none;font-size:1.5rem;text-align:left;color:pink;")
main.appendChild(ul);

let firstLi = document.createElement("li");
ul.appendChild(firstLi);
firstLi.innerText = "Adil Valizade";

let secondLi = document.createElement("li");
ul.appendChild(secondLi);
secondLi.innerText = "Eljan Rustamov";

let thirdLi = document.createElement("li");
ul.appendChild(thirdLi);
thirdLi.innerText = "Roza Abdullayeva";

let fourthLi = document.createElement("li");
ul.appendChild(fourthLi);
fourthLi.innerText = "Aysel Mirza";

let fifthLi = document.createElement("li");
ul.appendChild(fifthLi);
fifthLi.innerText = "Farid Guluzade";

let sixthLi = document.createElement("li");
ul.appendChild(sixthLi);
sixthLi.innerText = "Akif Guliyev";

let seventhLi = document.createElement("li");
ul.appendChild(seventhLi);
seventhLi.innerText = "Asad Rasulov";