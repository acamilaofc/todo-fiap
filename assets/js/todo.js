import { addTask, getAllTasks } from "./utils/domFuncions.js";

// console.log(db[0].steps[2].step);
// output: "Publicar no Expo"

const db = [
  {
    id: 1,
    title: "Concluir App Conexão Arte",
    steps: [
      {
        step: "Ajustar textos",
      },
      {
        step: "Trocar imagens para imagens públicas",
      },
      {
        step: "Publicar no Expo",
      },
      {
        step: "Publicar no Expo Store Connect",
      },
    ],
    done: false,
    dueDate: "2022-05-06",
    reminder: "2022-05-02 10:00",
  },
  {
    id: 2,
    title: "Aula 4 Fiap - Avanade",
    steps: [{ step: "Atributos Globais" }, { step: "Estruturas CSS" }],
    done: true,
    dueDate: "2022-04-28",
  },
];

getAllTasks(db);
// console.log(db[0].title);

const newTask = document.querySelector("#inputTxtNewTask");
const form = document.querySelector("#addNewTask");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const d = new Date();
const today = `${d.getDay()}/${d.getMonth() + 1}/${d.getFullYear()}`;

newTask.addEventListener("keyup", (e) => {
  e.preventDefault();
  e.stopPropagation();
  if (e.key == "Enter") {
    if (!newTask.value) {
      alert("Digite alguma coisa");
    } else {
      alert(newTask.value);
      db.push({
        id: Number(db.length) + 1,
        title: newTask.value,
        done: false,
        dueDate: today,
      });
      newTask.value = "";
      console.log(db);
    }
  }
});
