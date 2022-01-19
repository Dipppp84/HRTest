//import {getDepartments, addDep, saveDepartment, btnUpdateDep} from "./Departments.js"
var url = 'http://178.150.196.140:8085/HumanResourcesDepartment/';

//Кнопка "Применить" в выпадающем Модел в "Редактировать"
async function updateSub(id, isChair, idFac) {
    let n = document.getElementById("newName");
    let a = document.getElementById("newAbbreviation");
    let d = document.getElementById("newDescription");

    let dep = {
        id: id,
        name: n.value,
        abbreviation: a.value,
        description: d.value
    };
    console.log(id, document.getElementById("newName").value,
        document.getElementById("newAbbreviation").value,
        document.getElementById("newDescription").value);
    console.log(JSON.stringify(dep));
    const response = await fetch(url + 'subdivision/UpdateSub', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dep)
    });
    console.log(response);
    window.location.href = (location.href + "#close");
    updateTheList(isChair, idFac)
}
async function deleteSub(id, isChair, fac) {//'http://localhost:8080/'
    const response = await fetch(url + 'subdivision/DeleteSub?id=' + 0, {
        method: 'DELETE',
        headers: {'Content-Type': 'charset=UTF-8'}
    });
    errorProcessing(response, "sad")


    updateTheList(isChair, fac);
}

//Обновляет Список
async function updateTheList(isChair, fac) {
    if (isChair == true)
        getChair(fac);
    else if (location.pathname == '/HRTest/Departments.html') {
        getDepartments();
    }
    else if (location.pathname == '/HRTest/FacultyChair.html')
        getFaculty();
}