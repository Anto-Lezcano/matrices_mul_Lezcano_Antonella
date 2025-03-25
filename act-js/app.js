const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

async function agregatePeople(peoples) {
  const name = await askQuestion("Ingrese el nombre: ");
  const lastname = await askQuestion("Ingrese el apellido: ");
  const dni = await askQuestion("Ingrese su DNI: ");

  let phones = [];
  while (true) {
    let phone = await askQuestion("Ingrese el número de teléfono: ");
    if (phone.trim() === "") {
      console.log("Ingrese un número de teléfono válido");
      continue;
    }
    phones.push(phone);

    let continues = await askQuestion(
      "Desea agregar otro número de teléfono? Ingrese si/no: "
    );
    if (continues.trim().toUpperCase() === "NO") break;
  }

  peoples.push({ name, lastname, dni, phones });
}

function showPeople(peoples) {
  console.log("\nPersonas registradas:");
  peoples.forEach((person, index) => {
    console.log(`\n${index + 1} Persona`);
    console.log(`Nombre: ${person.name}`);
    console.log(`Apellido: ${person.lastname}`);
    console.log(`DNI: ${person.dni}`);
    console.log("Phones:");
    person.phones.forEach((phone) => console.log(phone));
  });
}

async function app() {
  let peoples = [];

  while (true) {
    await agregatePeople(peoples);
    let continues = await askQuestion("Desea agregar otro usuario? Ingrese si/no: ");
    if (continues.trim().toUpperCase() === "NO") {
      showPeople(peoples);
      rl.close();
      break;
    }
  }
}

app();
