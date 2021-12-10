var url = 'http://178.150.196.140:8085/HumanResourcesDepartment/';
getFaculty();

async function getFaculty() {
    const response = await fetch(url + 'subdivision/faculty/getFaculty', {
        method: 'POST',
        headers: {
            'Content-Type': 'charset=UTF-8',
        }
    });
    const faculties = await response.json()

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);
    let elmFac = document.getElementById('Faculty');
    elmFac.innerHTML = '';
    elmFac.appendChild(table);

    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "id";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "name";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "abbreviation";
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = "description";
    let heading_5 = document.createElement('th');
    heading_5.innerHTML = "dateOfDepartmentCreation";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    row_1.appendChild(heading_5);

    thead.appendChild(row_1);

    for (let i = 0; i < faculties.length; i++) {
        let fac = faculties[i];

        let rowNext = document.createElement('tr');
        let rowData1 = document.createElement('td');
        rowData1.innerHTML = fac.id;
        rowData1.id
        let rowData2 = document.createElement('td');
        rowData2.innerHTML = fac.name;
        let rowData3 = document.createElement('td');
        rowData3.innerHTML = fac.abbreviation;
        let rowData4 = document.createElement('td');
        rowData4.innerHTML = fac.description;
        let rowData5 = document.createElement('td');
        rowData5.innerHTML = fac.dateOfDepartmentCreation;

        let rowData6 = document.createElement('td');
        let btnUpdate = document.createElement("button");
        const textUpd = document.createTextNode("Редактировать");
        btnUpdate.appendChild(textUpd);
        btnUpdate.onclick = function () {
            updateFac(fac);
        };
        btnUpdate.className = "btn btn-updateDep";
        rowData6.appendChild(btnUpdate);

        let rowData7 = document.createElement('td');
        let btnDelete = document.createElement("button");
        const textDel = document.createTextNode("Удалить");
        btnDelete.appendChild(textDel);
        btnDelete.onclick = function () {
            deleteSub(fac.id)
        };
        btnDelete.className = "btn btn-delete";
        rowData7.appendChild(btnDelete);

        rowNext.appendChild(rowData1);
        rowNext.appendChild(rowData2);
        rowNext.appendChild(rowData3);
        rowNext.appendChild(rowData4);
        rowNext.appendChild(rowData5);
        rowNext.appendChild(rowData6);
        rowNext.appendChild(rowData7);

        tbody.appendChild(rowNext);
    }
}

//Кнопка "редактировать"
async function updateFac(fac) {
    let n = document.getElementById("newName");
    let a = document.getElementById("newAbbreviation");
    let d = document.getElementById("newDescription");

    n.value = fac.name;
    a.value = fac.abbreviation;
    d.value = fac.description;

    document.getElementById("btnUpd").onclick = function() {
        //Кнопка "Применить" в выпадающем Модел
        updateSub(fac.id)
    };
    window.location.href = "FacultyChair.html#openModal";
}

//{"name":"Depart1","abbreviation":"ABVRT","description":"Descript"}
//Кнопка Добавить
async function saveFaculty() {
    let jName = document.getElementById("jName").value;
    let jAbbreviation = document.getElementById("jAbbreviation").value;
    let jDescription = document.getElementById("jDescription").value;

    let fac = {
        name: jName,
        abbreviation: jAbbreviation,
        description: jDescription
    };
    console.log(jName, jAbbreviation, jDescription);
    console.log(JSON.stringify(fac));
    const response = await fetch(url + 'subdivision/faculty/save', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(fac)
    });
    console.log(response);
    getFaculty();
}