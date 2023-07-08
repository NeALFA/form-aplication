const positionFilter = document.querySelector(".position-filter");
const positionSelect = document.querySelector(".position-select");
const levelSelect = document.querySelector(".level-select");
const adressFilter = document.querySelector(".adress-filter");
const adressSelect = document.querySelector(".adres-select");
const teacherForm = document.querySelector(".teacher-form");
const teacherTableBody = document.querySelector(".teacher-table tbody");

let teachersJSon = localStorage.getItem(TEACHERS);
let teachers = JSON.parse(teachersJSon) || [];

let search = "";
let selected = null;

adressFilter.innerHTML = `<option value="adress">Adress</option>`;
positionFilter.innerHTML += `<option value="position">Position level</option>`;
positionSelect.innerHTML += `<option value="position">Position</option>`;

positionLevel.map((el) => {
  positionFilter.innerHTML += `<option value="${el}">${el}</option>`;
  levelSelect.innerHTML += `<option value="${el}">${el}</option>`;
});
position.map((el) => {
  positionSelect.innerHTML += `<option value="${el}">${el}</option>`;
});
adress.map((ad) => {
  adressFilter.innerHTML += `<option value="${ad}">${ad}</option>`;
  adressSelect.innerHTML += `<option value="${ad}">${ad}</option>`;
});

teacherForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (this.checkValidity()) {
    let teacher = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      adres: this.adres.value,
      position: this.position.value,
      level: this.level.value,
      date: this.date.value,
      salary: this.salary.value,
      married: this.married.checked,
    };
    if (selected === null) {
      teachers.push(teacher);
    } else {
      teachers[selected] = teacher;
    }
    bootstrap.Modal.getInstance(studentModal).hide();
    this.reset();
  } else {
    this.classList.add("was-validated");
  }
  localStorage.setItem(TEACHERS, JSON.stringify(teachers));
  getTeachers();
});

const getTeachersRow = (
  { firstName, lastName, adres, position, level, date, salary, married },
  i
) => {
  return `<tr>
<td>${i + 1}</td>
<td>${firstName}</td>
<td>${lastName}</td>
<td>${adres}</td>
<td>${position}</td>
<td>${level}</td>
<td>${date}</td>
<td>${salary === "" ? "Qul" : salary}</td>
<td>${married ? "Ha" : "Yo'q"}</td>
<td class="text-end">
  <button
    data-bs-toggle="modal"
    data-bs-target="#studentModal"
    class="btn btn-primary"
    onClick="editStudent(${i})"
  >
    Edit
  </button>
  <button class="btn btn-danger" onClick="deleteTeacher(${i})">Delete</button>
</td>
</tr>`;
};

function getTeachers() {
  //   let results = teachers.filter((teacher) => {
  //     teachers.firstName.toLowerCase().includes(search) ||
  //       teachers.lastName.toLowerCase().includes(search);
  //   });
  //   if (category !== "Position level") {
  //     results = results.filter((el) => el.level === level);
  //   }
  teacherTableBody.innerHTML = "";

  teachers.map((el, i) => {
    teacherTableBody.innerHTML += getTeachersRow(el, i);
  });
}
getTeachers();

const deleteTeacher = (i) => {
  let isDelete = confirm("Ukam ishonching komilmi?");
  if (isDelete) {
    teachers.splice(i, 1);
    localStorage.setItem(TEACHERS, JSON.stringify(teachers));
    getTeachers();
  }
};

positionFilter.addEventListener("change", function () {
  category = this.value;
  localStorage.setItem(CATEGORY, this.value);
  getTeachers();
});

///////////////index page////////////

const passwordInput = document.querySelector(".password-input");
const buttonLogin = document.querySelector(".submit");
const body = document.getElementById("#body");

passwordInput.addEventListener("keyup", () => {
  password = passwordInput.value;
  if (password === "31") {
    buttonLogin.addEventListener("click", () => {
      window.open("../table.html");
    });
  } else {
    alert("parol", 31);
  }
});
