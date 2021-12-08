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
    document.getElementById('Departments').innerHTML = '';
    document.getElementById('Departments').appendChild(table);

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
        let rowData2 = document.createElement('td');
        rowData2.innerHTML = dep.name;
        let rowData3 = document.createElement('td');
        rowData3.innerHTML = dep.description;
        let rowData4 = document.createElement('td');
        rowData4.innerHTML = dep.dateOfDepartmentCreation;

        let rowData5 = document.createElement('td');
        let btnDelete = document.createElement("button");
        const text = document.createTextNode("Удалить");
        btnDelete.appendChild(text);
        btnDelete.onclick = function () {
            deleteDep(dep.id)
        };
        btnDelete.className = "btn btn-delete";
        rowData5.appendChild(btnDelete);

        rowNext.appendChild(rowData1);
        rowNext.appendChild(rowData2);
        rowNext.appendChild(rowData3);
        rowNext.appendChild(rowData4);
        rowNext.appendChild(rowData5);
        tbody.appendChild(rowNext);
    }
}

async function deleteDep(id) {
    const response = await fetch(url + 'subdivision/delete?id=' + id, {
        method: 'DELETE',
        headers: {'Accept': 'charset=UTF-8'}
    });
    console.log(response)
    getDepartments();
}

//{"name":"Depart1","abbreviation":"ABVRT","description":"Descript"}
async function saveDepartment(jName, jAbbreviation, jDescription) {
    let dep = {
        name: jName,
        abbreviation: jAbbreviation,
        description: jDescription
    };

    const response = await fetch(url + 'subdivision/Department/save', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: dep
    });
    console.log(response);
    getDepartments();
}