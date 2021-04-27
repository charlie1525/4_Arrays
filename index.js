let model = require("./student");

let students = [];

let student = {
  name: "Carlos Uriel Fregoso Espericueta",
  controlNumber: "17400978",
  email: "caurfregosoes@ittepic.edu.mx",
  grade: 87,
};

let student2 = {
  name: "Andrea Elvira Gongora Vallejo",
  controlNumber: "17006189",
  email: "aegongorava@ittepic.edu.mx",
  grade: 100,
};

let student3 = {
  name: "Alexis Torres Acosta",
  controlNumber: "8817393",
  email: "altorresac@ittepic.edu.mx",
  grade: 90,
};

let student4 = {
  name: "Juan Morales",
  controlNumber: "7719382",
  email: "morales@ittepic.edu.mx",
  grade: 50,
};

students = model.create(student, students);
students = model.create(student2, students);
students = model.create(student3, students);
students = model.create(student4, students);

console.log("<------  Todos de alumnos registrados  ------>")
model.read(students);

console.log("<------  Despues de borrar  ------>");
model.eraseNumCtl(17400978, students);
model.read(students);

console.log("<------  Buscar  ------>");
model.estudianteNumCt(17006189, students);
console.log("\n");

console.log("<------  Aprobados  ------>");
model.aprobado(students);
console.log("\n");

console.log("<------  Actualizar por numero de control  ------>");
model.update(7719382, ["name", "grade"], ["Alan Torres", "99"], students);
model.read(students);