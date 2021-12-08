var url = 'http://178.150.196.140:8085/HumanResourcesDepartment/';

async function getEmployees() {
    const response = await fetch(url + 'employee/getDepartment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const employees = await response.json()

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);
    document.getElementById('Employees').innerHTML = '';
    document.getElementById('Employees').appendChild(table);

    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "id";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "firstName";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "familyName";
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = "middleName";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);

    thead.appendChild(row_1);

    for (let i = 0; i < employees.length; i++) {
        let emp = employees[i];

        let rowNext = document.createElement('tr');
        let rowData1 = document.createElement('td');
        rowData1.innerHTML = emp.id;
        let rowData2 = document.createElement('td');
        rowData2.innerHTML = emp.firstName;
        let rowData3 = document.createElement('td');
        rowData3.innerHTML = emp.familyName;
        let rowData4 = document.createElement('td');
        rowData4.innerHTML = emp.middleName;

        let rowData5 = document.createElement('td');
        let btnDelete = document.createElement("button");
        const text = document.createTextNode("Удалить");
        btnDelete.appendChild(text);
        btnDelete.onclick = function () {
            removeEmp("id DEP" ,emp.id)
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

async function removeEmp(idDepartment, idEmployee) {
    /*const response = await fetch(url + '/subdivision/removeEmployee?idDepartment=2&idEmployee=6', {
        method: 'DELETE',
        headers: {'Accept': 'charset=UTF-8'}
    });*/
    console.log(idDepartment, idEmployee);
    getEmployees();
}

getEmployees();

