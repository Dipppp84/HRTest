var url = 'http://178.150.196.140:8085/HumanResourcesDepartment/';

getDepartments();


async function getDepartments() {
    const response = await fetch(url + 'subdivision/department/getDepartment', {
        method: 'POST',
        headers: {
            'Content-Type': 'charset=UTF-8',
        }
    });
    const departments = await response.json()

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);
    let elmDep = document.getElementById('Departments');
    elmDep.innerHTML = '';
    elmDep.appendChild(table);

    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "id";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "name";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "description";
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = "dateOfDepartmentCreation";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);

    thead.appendChild(row_1);

    for (let i = 0; i < departments.length; i++) {
        let dep = departments[i];

        let rowNext = document.createElement('tr');
        let rowData1 = document.createElement('td');
        rowData1.innerHTML = dep.id;
        rowData1.id
        let rowData2 = document.createElement('td');
        rowData2.innerHTML = dep.name;
        let rowData3 = document.createElement('td');
        rowData3.innerHTML = dep.description;
        let rowData4 = document.createElement('td');
        rowData4.innerHTML = dep.dateOfDepartmentCreation;

        let rowData5 = document.createElement('td');
        let btnUpdate = document.createElement("button");
        const textUpd = document.createTextNode("Редактировать");
        btnUpdate.appendChild(textUpd);
        btnUpdate.onclick = function () {
            updateDep(dep);
        };
        btnUpdate.className = "btn btn-updateDep";
        rowData5.appendChild(btnUpdate);

        let rowData6 = document.createElement('td');
        let btnDelete = document.createElement("button");
        const textDel = document.createTextNode("Удалить");
        btnDelete.appendChild(textDel);
        btnDelete.onclick = function () {
            deleteDep(dep.id)
        };
        btnDelete.className = "btn btn-delete";
        rowData6.appendChild(btnDelete);

        rowNext.appendChild(rowData1);
        rowNext.appendChild(rowData2);
        rowNext.appendChild(rowData3);
        rowNext.appendChild(rowData4);
        rowNext.appendChild(rowData5);
        rowNext.appendChild(rowData6);

        tbody.appendChild(rowNext);
    }
}

async function updateDep(dep) {
    let modal = document.getElementById("modal-body");
    modal.innerHTML = '<input type="text" value="' + dep.name + '" id="newName" placeholder="name">\n' +
        '                <input type="text" value="' + dep.abbreviation + '" id="newAbbreviation" placeholder="abbreviation">\n' +
        '                <input type="text" value="' + dep.description + '" id="newDescription" placeholder="description">\n' +
        '                <button class="btn btn-add" onclick=updateSub(' +dep.id + ')>Применить</button>';
    window.location.href = "departments.html#openModal";
}

async function updateSub(id) {
    //не видит значение new
    let dep = {
        id: id,
        name: document.getElementById("newName").value,
        abbreviation: document.getElementById("newAbbreviation").value,
        description: document.getElementById("newDescription").value
    };
    console.log(id, document.getElementById("newName").value,
        document.getElementById("newAbbreviation").value,
        document.getElementById("newDescription").value);
    console.log(JSON.stringify(dep));
    const response = await fetch(url + 'subdivision/Department/save', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dep)
    });
    console.log(response);
    getDepartments();
}

async function deleteDep(id) {
    const response = await fetch(url + 'subdivision/delete?id=' + id, {
        method: 'DELETE',
        headers: {'Accept': 'charset=UTF-8'}
    });
    console.log(response)
    getDepartments();
}

async function clickAdd() {
    let jName = document.getElementById("jName").value;
    let jAbbreviation = document.getElementById("jAbbreviation").value;
    let jDescription = document.getElementById("jDescription").value;
    saveDepartment(jName, jAbbreviation, jDescription);
}

//{"name":"Depart1","abbreviation":"ABVRT","description":"Descript"}
async function saveDepartment(jName, jAbbreviation, jDescription) {
    let dep = {
        name: jName,
        abbreviation: jAbbreviation,
        description: jDescription
    };
    console.log(jName, jAbbreviation, jDescription);
    console.log(JSON.stringify(dep));
    const response = await fetch(url + 'subdivision/Department/save', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dep)
    });
    console.log(response);
    getDepartments();
}