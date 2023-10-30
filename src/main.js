const { invoke } = window.__TAURI__.tauri;
console.log(window.__TAURI__);
const {listen} = window.__TAURI__.event;
listen("event_name",(eventpayload)=>{
  console.log(eventpayload);
})
let greetInputEl;
let greetMsgEl;

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });//calls the greet command in rust
}

window.addEventListener("DOMContentLoaded", () => {
  for(let x = 0; x < 10; x++){
    console.log(x);
  }
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  document.querySelector("#greet-form").addEventListener("submit", (e) => {
    e.preventDefault();
    greet();
  });
});

function addTableRow(){
  let tableRef = document.getElementById("hours-table");
  let newTableRow = document.createElement("tr");
  let newTableCell = document.createElement("td");
  let newDateButton = document.createElement("input");
  let newHrsWorkedInput = document.createElement("input");
  let newCycleHoursInput = document.createElement("input");
  let newAvailHrsTomorrow = document.createElement("p");

  //Date Setup
  newDateButton.type = "date";
  newDateButton.value=Date.now();
  newTableCell.appendChild(newDateButton);
  newTableRow.appendChild(newTableCell);

  //Hrs Setup
  newHrsWorkedInput.type = "number";
  newTableCell = document.createElement("td");
  newTableCell.appendChild(newHrsWorkedInput);
  newTableRow.appendChild(newTableCell);

  //Cycle Hrs Setup
  newCycleHoursInput.type = "number";
  newTableCell = document.createElement("td");
  newTableCell.appendChild(newCycleHoursInput);
  newTableRow.appendChild(newTableCell);

  //Total Hrs Avail Tomorrow Setup
  newTableCell = document.createElement("td");
  newTableCell.appendChild(newAvailHrsTomorrow);
  newTableRow.appendChild(newTableCell);

  //add row to table
  tableRef.appendChild(newTableRow);
}