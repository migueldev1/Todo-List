let counter = 0;
btnAdd = document.getElementById("addTaskBtn")
input = document.getElementById("taskInput");
main = document.getElementById("area-list");

function addTask() {
    let valueInput = input.value.trim();

     if (counter > 6) {
    alert("Você atingiu o limite de tarefas!");
    return;
    }

    if ((valueInput !== "") && (valueInput !== null) && (valueInput !== undefined)) {
        counter++;
        let newItem = `<div id="${counter}" class="item">
                    <div onClick="markTask(${counter})" class="item-icon">
                        <i id="icon_${counter}" class="mdi mdi-circle-outline"></i>
                    </div>
                    <div onClick="markTask(${counter})" class="item-name">
                        ${valueInput}
                    </div>
                    <div class="item-button">
                        <button onClick="deleteTask(${counter})" class="delete-btn" id="delete-btn" ><i class="mdi mdi-delete"></i>Deletar</button>
                    </div>
                </div>`;
        main.innerHTML += newItem;

        input.value = "";
        input.focus();
    }

}

btnAdd.addEventListener("click", addTask);

function deleteTask(id) {
    let task = document.getElementById(id);
    if (task) {
        task.remove();
        counter--;
    }
}

function markTask(id) {
    let item = document.getElementById(id);
    let classClicked = item.getAttribute('class');
    console.log(classClicked);

    if (classClicked == "item") {
       item.classList.add("clicked");

       let icon = document.getElementById("icon_" + id);
        icon.classList.remove("mdi-circle-outline");
        icon.classList.add("mdi-check-circle");

        item.parentNode.appendChild(item);

    }else{
        item.classList.remove("clicked");

       let icon = document.getElementById("icon_" + id);
        icon.classList.remove("mdi-check-circle");
        icon.classList.add("mdi-circle-outline");
    }
}

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
});




