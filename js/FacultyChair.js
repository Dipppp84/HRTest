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
            const textUpd = document.createTextNode("Редактировать");
            btnUpdate.appendChild(textUpd);
            btnUpdate.onclick = function () {
                updateFacOrChr(fac);
            };
            btnUpdate.className = "btn btn-updateDep";
            rowData6.appendChild(btnUpdate);

            let rowData7 = document.createElement('td');
            let btnGetChair = document.createElement("button");
            const textBtnGetChair = document.createTextNode("Кафедры");
            btnGetChair.appendChild(textBtnGetChair);
            btnGetChair.onclick = function () {
                getChair(fac);
            };
            btnGetChair.className = "btn btn-updateDep";
            rowData7.appendChild(btnGetChair);

            let rowData8 = document.createElement('td');
            let btnDelete = document.createElement("button");
            const textDel = document.createTextNode("Удалить");
            btnDelete.appendChild(textDel);
            btnDelete.onclick = function () {
                deleteSub(fac.id)
            };
            btnDelete.className = "btn btn-delete";
            rowData8.appendChild(btnDelete);

            rowNext.appendChild(rowData1);
            rowNext.appendChild(rowData2);
            rowNext.appendChild(rowData3);
            rowNext.appendChild(rowData4);
            rowNext.appendChild(rowData5);
            rowNext.appendChild(rowData6);
            rowNext.appendChild(rowData7);
            rowNext.appendChild(rowData8);

            tbody.appendChild(rowNext);
        }
    }
    //Надпись в Шапке
    let title = document.getElementById("header__title");
    title.textContent = "Факультеты:";

    //Кнопка "Обновить Список"
    let btnUpd = document.getElementById("btn btn-update");
    btnUpd.textContent = "Обновить список";

    //Кнопка "Добавить Факультет"
    let btnAdd = document.getElementById("btn btn-add");
    btnAdd.textContent = "Добавить Факультет";
    btnAdd.onclick = function () {
        addFac();
    };
}

async function getChair(fac) {
    const response = await fetch(url + 'subdivision/faculty/GetChair', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: ("id=" + fac.id)
    });
    const chair = await response.json();

    console.log(chair);

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

    if (chair.length == 0) {
        let rowNext = document.createElement('tr');
        let rowData1 = document.createElement('td');
        rowData1.textContent = "";
        let rowData2 = document.createElement('td');
        rowData2.textContent = "Пусто";
        rowNext.appendChild(rowData1);
        rowNext.appendChild(rowData2);

        tbody.appendChild(rowNext);
    } else {
        for (let i = 0; i < chair.length; i++) {
            let chr = chair[i];

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
            let btnUpdate = document.createElement("button");
            const textUpd = document.createTextNode("Редактировать");
            btnUpdate.appendChild(textUpd);
            btnUpdate.onclick = function () {
                updateFacOrChr(chr, true, fac);
            };
            btnUpdate.className = "btn btn-updateDep";
            rowData6.appendChild(btnUpdate);

            let rowData8 = document.createElement('td');
            let btnDelete = document.createElement("button");
            const textDel = document.createTextNode("Удалить");
            btnDelete.appendChild(textDel);
            btnDelete.onclick = function () {
                deleteSub(chr.id, true, fac)
            };
            btnDelete.className = "btn btn-delete";
            rowData8.appendChild(btnDelete);

            rowNext.appendChild(rowData1);
            rowNext.appendChild(rowData2);
            rowNext.appendChild(rowData3);
            rowNext.appendChild(rowData4);
            rowNext.appendChild(rowData5);
            rowNext.appendChild(rowData6);
            rowNext.appendChild(rowData8);

            tbody.appendChild(rowNext);
        }// попадает всё под else
    }
    //Надпись в Шапке
    let title = document.getElementById("header__title");
    title.textContent = "Кафедры " + fac.name + ":";

    //Кнопка "Обновить Список"
    let btnUpd = document.getElementById("btn btn-update");
    btnUpd.textContent = "< Факультеты";

    //Кнопка "Добавить Кафедру" онКлац
    let btnAdd = document.getElementById("btn btn-add");
    btnAdd.textContent = "Добавить Кафедру";
    btnAdd.onclick = function () {
        addChr(fac);
    };
}


//Кнопка "редактировать"
async function updateFacOrChr(facOrChr, isChair, fac) {
    let modalTitle = document.getElementById("modal-title");
    let n = document.getElementById("newName");
    let a = document.getElementById("newAbbreviation");
    let d = document.getElementById("newDescription");
    modalTitle.textContent = "Редактировать:";

    n.value = facOrChr.name;
    a.value = facOrChr.abbreviation;
    d.value = facOrChr.description;

    document.getElementById("btnUpd").onclick = function () {
        //Кнопка "Применить" в выпадающем Модел
        updateSub(facOrChr.id, isChair, fac)
    };
    window.location.href = "FacultyChair.html#openModal";

}

//Кнопка "Добавить Кафедру"
async function addChr(fac) {
    let modalTitle = document.getElementById("modal-title");
    let n = document.getElementById("newName");
    let a = document.getElementById("newAbbreviation");
    let d = document.getElementById("newDescription");

    modalTitle.textContent = "Добавить Кафедру:";
    n.value = "";
    a.value = "";
    d.value = "";

    window.location.href = "FacultyChair.html#openModal";

    document.getElementById("btnUpd").onclick = function () {
        //Кнопка "Принять" в выпадающем Модел
        saveChair(fac);
    };
}
//Кнопка "Принять" в форме -> "Добавить Кафедру"
async function saveChair(outFac) {
    let jName = document.getElementById("newName");
    let jAbbreviation = document.getElementById("newAbbreviation");
    let jDescription = document.getElementById("newDescription");

    let fac = {
        name: jName.value,
        abbreviation: jAbbreviation.value,
        description: jDescription.value
    };
    console.log(JSON.stringify(fac));
    const response = await fetch(url + 'subdivision/faculty/AddChair?idFaculty=' + outFac.id, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(fac)
    });
    jName.value = '';
    jAbbreviation.value = '';
    jDescription.value = '';

    window.location.href = (location.href + "#close");

    console.log(response);
    getChair(outFac);
}


//Кнопка "Добавить Факультет"
async function addFac() {
    let modalTitle = document.getElementById("modal-title");
    let n = document.getElementById("newName");
    let a = document.getElementById("newAbbreviation");
    let d = document.getElementById("newDescription");

    modalTitle.textContent = "Добавить Факультет:";
    n.value = "";
    a.value = "";
    d.value = "";

    window.location.href = "FacultyChair.html#openModal";

    document.getElementById("btnUpd").onclick = function () {
        //Кнопка "Принять" в выпадающем Модел
        saveFaculty();
    };
}

//Кнопка "Принять" в форме -> "Добавить Факультет"
async function saveFaculty() {
    let jName = document.getElementById("newName");
    let jAbbreviation = document.getElementById("newAbbreviation");
    let jDescription = document.getElementById("newDescription");

    let fac = {
        name: jName.value,
        abbreviation: jAbbreviation.value,
        description: jDescription.value
    };
    console.log(jName, jAbbreviation, jDescription);
    console.log(JSON.stringify(fac));
    const response = await fetch(url + 'subdivision/faculty/save', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(fac)
    });
    jName.value = '';
    jAbbreviation.value = '';
    jDescription.value = '';

    window.location.href = (location.href + "#close");

    console.log(response);
    getFaculty();
}