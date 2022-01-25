var url = 'http://178.150.196.140:8085/HumanResourcesDepartment/';

async function getEmpDepartments() {
    document.getElementById("btnAddEmp").style.display = "none";

    const response = await fetch(url + 'subdivision/department/getDepartment', {
        method: 'POST',
        headers: {'Content-Type': 'charset=UTF-8'}
    });
    errorProcessing(response, "Выбраны Отделы");

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

    if (departments.length == 0) {
        let rowNext = document.createElement('tr');
        let rowData1 = document.createElement('td');
        rowData1.textContent = "";
        let rowData2 = document.createElement('td');
        rowData2.textContent = "Пусто";
        rowNext.appendChild(rowData1);
        rowNext.appendChild(rowData2);

        tbody.appendChild(rowNext);
    } else {
        for (let i = 0; i < departments.length; i++) {
            let dep = departments[i];

            let rowNext = document.createElement('tr');
            let rowData1 = document.createElement('td');
            rowData1.innerHTML = dep.id;
            let rowData2 = document.createElement('td');
            rowData2.innerHTML = dep.name;
            let rowData3 = document.createElement('td');
            rowData3.innerHTML = dep.abbreviation;
            let rowData4 = document.createElement('td');
            rowData4.innerHTML = dep.description;
            let rowData5 = document.createElement('td');
            rowData5.innerHTML = dep.dateOfDepartmentCreation;

            let rowData6 = document.createElement('td');
            let btnUpdate = document.createElement("button");
            const textUpd = document.createTextNode("Выбрать");
            btnUpdate.appendChild(textUpd);
            btnUpdate.onclick = function () {
                getAllEmployees(dep);
            };
            btnUpdate.className = "btn btn-updateDep";
            btnUpdate.id = "btnSelect";
            rowData6.appendChild(btnUpdate);

            rowNext.appendChild(rowData1);
            rowNext.appendChild(rowData2);
            rowNext.appendChild(rowData3);
            rowNext.appendChild(rowData4);
            rowNext.appendChild(rowData5);
            rowNext.appendChild(rowData6);

            tbody.appendChild(rowNext);
        }
    }
}

async function getEmpFaculty() {
    document.getElementById("btnAddEmp").style.display = "none";

    const response = await fetch(url + 'subdivision/faculty/getFaculty', {
        method: 'POST',
        headers: {
            'Content-Type': 'charset=UTF-8',
        }
    });
    errorProcessing(response, "Выбраны Факультеры");
    const faculties = await response.json()

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);
    let elmFac = document.getElementById('Departments');
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

    if (faculties.length == 0) {
        let rowNext = document.createElement('tr');
        let rowData1 = document.createElement('td');
        rowData1.textContent = "";
        let rowData2 = document.createElement('td');
        rowData2.textContent = "Пусто";
        rowNext.appendChild(rowData1);
        rowNext.appendChild(rowData2);

        tbody.appendChild(rowNext);
    } else {
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
            const textUpd = document.createTextNode("Выбрать");
            btnUpdate.appendChild(textUpd);
            btnUpdate.onclick = function () {
                getAllEmployees(fac);
            };
            btnUpdate.className = "btn btn-add";
            btnUpdate.id = "btnSelect";
            rowData6.appendChild(btnUpdate);

            rowNext.appendChild(rowData1);
            rowNext.appendChild(rowData2);
            rowNext.appendChild(rowData3);
            rowNext.appendChild(rowData4);
            rowNext.appendChild(rowData5);
            rowNext.appendChild(rowData6);

            tbody.appendChild(rowNext);
        }
    }
}

async function getAllChair() {
    document.getElementById("btnAddEmp").style.display = "none";

    const response = await fetch(url + '/subdivision/Chair/GetChair', {
        method: 'POST',
        headers: {'Content-Type': 'charset=UTF-8'}
    });
    errorProcessing(response, "Выбраны Кафедры");
    const chairs = await response.json()

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);
    let elmChr = document.getElementById('Departments');
    elmChr.innerHTML = '';
    elmChr.appendChild(table);

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
    let heading_6 = document.createElement('th');
    heading_6.innerHTML = "Факультет";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    row_1.appendChild(heading_5);
    row_1.appendChild(heading_6);


    thead.appendChild(row_1);

    if (chairs.length == 0) {
        let rowNext = document.createElement('tr');
        let rowData1 = document.createElement('td');
        rowData1.textContent = "";
        let rowData2 = document.createElement('td');
        rowData2.textContent = "Пусто";
        rowNext.appendChild(rowData1);
        rowNext.appendChild(rowData2);

        tbody.appendChild(rowNext);
    } else {
        for (let i = 0; i < chairs.length; i++) {
            let chr = chairs[i];

            let rowNext = document.createElement('tr');
            let rowData1 = document.createElement('td');
            rowData1.innerHTML = chr.id;
            rowData1.id
            let rowData2 = document.createElement('td');
            rowData2.innerHTML = chr.name;
            let rowData3 = document.createElement('td');
            rowData3.innerHTML = chr.abbreviation;
            let rowData4 = document.createElement('td');
            rowData4.innerHTML = chr.description;
            let rowData5 = document.createElement('td');
            rowData5.innerHTML = chr.dateOfDepartmentCreation;
            let rowData6 = document.createElement('td');
            rowData6.innerHTML = chr.linkToFaculty.name;

            let rowData7 = document.createElement('td');
            let btnUpdate = document.createElement("button");
            const textUpd = document.createTextNode("Выбрать");
            btnUpdate.appendChild(textUpd);
            btnUpdate.onclick = function () {
                getAllEmployees(chr);
            };
            btnUpdate.className = "btn btn-updateDep";
            btnUpdate.id = "btnSelect";
            rowData7.appendChild(btnUpdate);

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
}

async function getAllEmployees(dep) {
    let btnAddEmp = document.getElementById("btnAddEmp");
    btnAddEmp.style.display = "inline";
    btnAddEmp.onclick = function (){
        window.location.href = location.pathname + "#openModal";
    }

    const response1 = await fetch(url + '/subdivision/GetLaborContracts', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
        body: ("idDepartment=" + dep.id)
    });
    errorProcessing(response1);
    const laborContracts = await response1.json();

    const response2 = await fetch(url + '/subdivision/GetEmployees', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
        body: ("idDepartment=" + dep.id)
    });
    errorProcessing(response2);
    const employeesDraft = await response2.json()

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);
    let empData = document.getElementById('Departments');
    empData.innerHTML = '';
    empData.appendChild(table);

    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "№";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "id";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "ФИО";
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = "Состояние"; // Уволен Работает Черновик

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);

    thead.appendChild(row_1);

    if (laborContracts.length == 0 && employeesDraft.length == 0) {
        let rowNext = document.createElement('tr');
        let rowData1 = document.createElement('td');
        rowData1.textContent = "";
        let rowData2 = document.createElement('td');
        rowData2.textContent = "Пусто";
        rowNext.appendChild(rowData1);
        rowNext.appendChild(rowData2);

        tbody.appendChild(rowNext);
    } else {
        let indexNumber = 1;
        //выводим список контрактов сделать что бы групировало контракты в сотрудниках
        for (let i = 0; i < laborContracts.length; i++) {
            let emp = laborContracts[i].employee;

            let rowNext = document.createElement('tr');
            let rowData1 = document.createElement('td');
            rowData1.innerHTML = indexNumber++;

            let rowData2 = document.createElement('td');
            rowData2.innerHTML = emp.id;

            let rowData3 = document.createElement('td');
            let familyName = emp.familyName == null ? "" : emp.familyName;
            let firstName = emp.firstName == null ? "" : emp.firstName;
            let middleName = emp.middleName == null ? "" : emp.middleName;
            rowData3.innerHTML = familyName + " " + firstName + " " + middleName;

            let rowData4 = document.createElement('td');
            rowData4.innerHTML = laborContracts[i].laborContractType;

            let rowData5 = document.createElement('td');
            let btnUpdate = document.createElement("button");
            const textUpd = document.createTextNode("Выбрать");
            btnUpdate.appendChild(textUpd);
            btnUpdate.onclick = function () {
                //getAllEmployees(fac);
            };
            btnUpdate.className = "btn btn-updateDep";
            rowData5.appendChild(btnUpdate);

            rowNext.appendChild(rowData1);
            rowNext.appendChild(rowData2);
            rowNext.appendChild(rowData3);
            rowNext.appendChild(rowData4);
            rowNext.appendChild(rowData5);

            tbody.appendChild(rowNext);
        }
        //выводит черновик
        for (let i = 0; i < employeesDraft.length; i++) {
            let emp = employeesDraft[i];

            let rowNext = document.createElement('tr');
            let rowData1 = document.createElement('td');
            rowData1.innerHTML = indexNumber++;

            let rowData2 = document.createElement('td');
            rowData2.innerHTML = emp.id;

            let rowData3 = document.createElement('td');
            let familyName = emp.familyName == null ? "" : emp.familyName;
            let firstName = emp.firstName == null ? "" : emp.firstName;
            let middleName = emp.middleName == null ? "" : emp.middleName;
            rowData3.innerHTML = familyName + " " + firstName + " " + middleName;

            let rowData4 = document.createElement('td');
            rowData4.innerHTML = "Черновик";

            let rowData5 = document.createElement('td');
            let btnUpdate = document.createElement("button");
            const textUpd = document.createTextNode("Выбрать");
            btnUpdate.appendChild(textUpd);
            btnUpdate.onclick = function () {
                //getAllEmployees(fac);
            };
            btnUpdate.className = "btn btn-updateDep";
            rowData5.appendChild(btnUpdate);

            rowNext.appendChild(rowData1);
            rowNext.appendChild(rowData2);
            rowNext.appendChild(rowData3);
            rowNext.appendChild(rowData4);
            rowNext.appendChild(rowData5);

            tbody.appendChild(rowNext);
        }
    }

    //Кнопка Принять в Модальном окне
    let btnUpd = document.getElementById("btnUpd");
    btnUpd.onclick = function (){
        window.location.href = location.pathname + "#openModal";
        saveEmp(dep);
    }
}

//Кнопка Принять в Модальном окне
async function saveEmp(dep){
    let jFamilyName = document.getElementById("familyName");
    let jFirstName = document.getElementById("firstName");
    let jMiddleName = document.getElementById("middleName");
    let jSex = document.getElementsByName("sex");
    let jDateOfBirth = document.getElementById("dateOfBirth");


    let emp = {
        familyName: jFamilyName.value,
        firstName: jFirstName.value,
        middleName: jMiddleName.value,
        sex: jSex.value,
        dateOfBirth: jDateOfBirth.value
    };
    console.log(JSON.stringify(emp));

    const response = await fetch(url + 'subdivision/addNewEmployee?idDepartment=' + dep.id, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(emp)
    });

    jFamilyName.value = '';
    jFirstName.value = '';
    jMiddleName.value = '';

    window.location.href = (location.href + "#close");
    errorProcessing(response, "Сотрудник добавлен")
    getAllEmployees(dep);
}



