const zapis = document.getElementById("zapis");
const btn = document.getElementById("send");
const list = document.getElementById("list");
const send2 = document.getElementById("send2");
const main = document.getElementById("main");

btn.addEventListener("click", function () { 
    if (zapis.value == "") {
        alert("Вы не ввели текст!");
        return;
    }

    const element = document.createElement("li");
    element.className = "list-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = zapis.value;

    element.appendChild(checkbox);
    element.appendChild(span);

    const hr = document.createElement("hr");
    list.appendChild(hr);

    list.appendChild(element);

    zapis.value = "";

    element.style.marginBottom = "10px";

    hr.style.margin = "10px 0";

    element.style.display = "flex";
    element.style.alignItems = "center";
    element.style.gap = "4px";
});


send2.addEventListener("click", function () {
    main.style.backgroundColor = main.style.backgroundColor == "black" ? "white" : "black";
    main.style.color = main.style.color == "white" ? "black" : "white";
});
