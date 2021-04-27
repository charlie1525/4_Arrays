function create(student, students) {
  students.push(student);
  return students;
}

function read(students) {
  students.forEach(s => {
    console.log("Nombre: " + s.name);
    console.log("Numero de control: " + s.controlNumber);
    console.log("\n");
  });
}

function eraseNumCtl(nc, students) {
  for (i = 0; i < students.length; i++) {
    if (students[i].controlNumber == nc) {
      students.splice(i, 1);
      break;
    };
  };// fin del ciclo para localizar y borrar al estudiante
  return students;
}//fin del metodo para borrar estudiante por numero de control


function update(nc, campos, cambios, students) {
  if (campos.length != cambios.length) {
    console.log("El tamaño de los campos y los cambios no son el mismo");
    return;
  };
  var i;
  for (i = 0; i < students.length; i++) {
    if (students[i].controlNumber == nc) {
      break;
    };
  }; // fin del ciclo para identificar al estudiante

  for (j = 0; j < campos.length; j++) {
    switch (campos[j]) {
      case "name":
        students[i].name = cambios[j];
        break;
      case "controlNumber":
        students[i].controlNumber = cambios[j];
        break;
      case "email":
        students[i].email = cambios[j];
        break;
      case "grade":
        students[i].grade = cambios[j];
        break;
    };
  }; //fin del ciclo para aplicar cambios
  return students;
}; //fin del  metodo para actualizar por numero de control y con parametros especificos


function estudianteNumCt(nc, students) {
  var i;
  for (i = 0; i < students.length; i++) {
    if (students[i].controlNumber == nc) {
      break;
    };
  }; // fin del ciclo para encontrar al estudiante

  if (i >= students.length) {
    console.log("No existe ese alumno");
    return;
  };
  console.log("Nombre: " + students[i].name);
  console.log("Email: " + students[i].email);
  console.log("Calificación: " + students[i].grade);
  return;
}//fin del metodo para encontrar al estudainte con el numero de control


function aprobado(students) {
  for (i = 0; i < students.length; i++) {
    if (students[i].grade >= 70) {
      console.log(students[i].name);
    };
  }; //Fin del ciclo para mostrar los estudiantes aprovados
  return;
};// fin del metodo para estudiantes aprobados

module.exports.create = create;
module.exports.read = read;
module.exports.eraseNumCtl = eraseNumCtl;
module.exports.update = update;
module.exports.estudianteNumCt = estudianteNumCt;
module.exports.aprobado = aprobado;
