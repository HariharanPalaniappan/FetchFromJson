let loadBtn = document.querySelector('.load-btn');
let actionInput = document.querySelector('.action-input');
let tableBody = document.querySelector('.table-body');
let heading = document.querySelector('.heading');
let listContainer = document.querySelector('.list-container');

loadBtn.addEventListener('click',()=>{
    listContainer.style.display = 'flex';
    heading.innerText = `Showing for "${actionInput.value.toUpperCase()}"`
    let curentList = data.filter(e=>{
        if(e.status.toLowerCase() == actionInput.value.toLowerCase()){
            return e;
        }
    })
    createTableBody(curentList);
})

let createTableBody = (value)=>{
    tableBody.innerText = '';
    value.map(e=>{
        let constiner = document.createElement('tr');
        tableBody.appendChild(constiner);
        let tableCell1 = document.createElement('td');
        tableCell1.innerText = e.capsule_id;
        constiner.appendChild(tableCell1);
        let tableCell2 = document.createElement('td');
        tableCell2.innerText = e.count_of_missions;
        constiner.appendChild(tableCell2);
        let tableCell3 = document.createElement('td');
        tableCell3.innerText = e.details;
        constiner.appendChild(tableCell3);
    })

}