// Function to add new Work Experience field
function addNewWEField() {
    let weDiv = document.getElementById('we');
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control', 'weField', 'mt-2');
    newNode.setAttribute('placeholder', 'Enter here');
    weDiv.insertBefore(newNode, weDiv.querySelector('#weAddButton'));
}

// Function to add new Academic Qualification field
function addNewAQField() {
    let aqDiv = document.getElementById('aq');
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control', 'aqField', 'mt-2');
    newNode.setAttribute('placeholder', 'Enter here');
    aqDiv.insertBefore(newNode, aqDiv.querySelector('#aqAddButton'));
}

// Function to generate the CV PDF
function generateCV() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Add Personal Information
    const name = document.getElementById('nameField').value;
    const contact = document.getElementById('contactField').value;
    const address = document.getElementById('AddressField').value;
    const linkedin = document.getElementById('LdField').value;
    const github = document.getElementById('ghField').value;

    doc.setFontSize(16);
    doc.text('Personal Information', 10, 10);
    doc.setFontSize(12);
    doc.text(`Name: ${name}`, 10, 20);
    doc.text(`Contact: ${contact}`, 10, 30);
    doc.text(`Address: ${address}`, 10, 40);
    doc.text(`LinkedIn: ${linkedin}`, 10, 50);
    doc.text(`GitHub: ${github}`, 10, 60);

    // Add Professional Experience
    const objective = document.querySelector('#we textarea').value;
    const weFields = document.querySelectorAll('.weField');
    const aqFields = document.querySelectorAll('.aqField');

    doc.setFontSize(16);
    doc.text('Professional Experience', 10, 80);
    doc.setFontSize(12);
    doc.text('Objective:', 10, 90);
    doc.text(objective, 10, 100);

    doc.text('Work Experience:', 10, 120);
    let yOffset = 130;
    weFields.forEach((field, index) => {
        doc.text(`${index + 1}. ${field.value}`, 10, yOffset);
        yOffset += 10;
    });

    // Add Academic Qualification
    doc.setFontSize(16);
    doc.text('Academic Qualification', 10, yOffset + 10);
    yOffset += 20;
    aqFields.forEach((field, index) => {
        doc.setFontSize(12);
        doc.text(`${index + 1}. ${field.value}`, 10, yOffset);
        yOffset += 10;
    });

    // Save the PDF
    doc.save('resume.pdf');
}

// Attach the generateCV function to the Generate CV button
document.querySelector('.btn-lg').addEventListener('click', generateCV);
