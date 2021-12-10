var url = 'http://178.150.196.140:8085/HumanResourcesDepartment/';

//Кнопка "Применить" в выпадающем Модел
async function updateSub(id) {
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
    const response = await fetch(url + 'subdivision/update', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dep)
    });
    console.log(response);
    window.location.href = (location.href + "#close");
    updateЕheList()
}

async function deleteSub(id) {
    const response = await fetch(url + 'subdivision/delete?id=' + id, {
        method: 'DELETE',
        headers: {'Accept': 'charset=UTF-8'}
    });
    updateЕheList()
}

//Обновляет Список
async function updateЕheList(){
    if (location.pathname == '/HRTest/departments.html')
        getDepartments();
    else if (location.pathname == '/HRTest/FacultyChair.html')
        getFaculty();
}