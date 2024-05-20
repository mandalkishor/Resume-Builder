function addNewWEField() {
    // console.log("Adding new Field")

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder", "Enter here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewAQField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder", "Enter here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

// generating CV
function generateCV(){
    let nameField=document.getElementById("nameField").value;

    let nameT1= document.getElementById("nameT1");
    // let nameT2= document.getElementById("nameT2")

    nameT1.innerHTML=nameField;
    // nameT2.innerHTML=nameField;

    // shorcut 
    document.getElementById("nameT2").innerHTML=nameField;

    // contact
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

    // address
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    // links
    document.getElementById("lT").innerHTML=document.getElementById("LdField").value;
    document.getElementById("gT").innerHTML=document.getElementById("ghField").value;

    //objective
    document.getElementById("objectiveT").innerHTML=document.getElementById("oField").value;

    //work experience
    document.getElementById("weT").innerHTML=document.getElementById("weField").value;
    
    let wes=document.getElementsByClassName("weField")

    let str="";

    for(let e of wes){
        str=str+`<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML=str;

    //academic qualification
    document.getElementById("aqT").innerHTML=document.getElementById("aqField").value;

    let aqs=document.getElementsByClassName("aqField");

    let str1="";

    for(let e of aqs){
        str1=str1+`<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML=str1;

    // form to template shift
    document.getElementById('cv-form').style.display='none'
    document.getElementById('cv-template').style.display='block'
}

//print CV
function printCV(){
    window.print();
}