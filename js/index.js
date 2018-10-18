let inpFullName = document.getElementById("inpFullName");
let inpAge = document.getElementById('inpAge');
let inpJob = document.getElementById('inpJob');


let TableView = document.getElementById("TableView");




let dBase = [];


// Inputers
$(document).ready(function () {

    function ShowDbase() {
        let innerElement = "";
        dBase.map((index, name) => innerElement = innerElement + `
        <tr>
            <td data-label="ID">${index}</td>
            <td data-label="Name">${name}</td>
            <td data-label="Age">l</td>
            <td data-label="Job">JOB</td>
        </tr>
    `)
        TableView.innerHTML = innerElement;
    }

    function AddToDbase() {
        let FullnameValue = inpFullName.value;
        // let AgeValue = inpAge.value;
        // let JobValue = inpJob.value;

        dBase.push(FullnameValue);
        localStorage.setItem('dBase', dBase)
        console.log(dBase)
    }

    $("#btnSave").click(function () {
        AddToDbase();
        ShowDbase();
    })




})