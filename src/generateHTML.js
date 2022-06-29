const Employee = require("../lib/Employee")


const generateHTML = (employeeArr) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <title>Employee Profiles</title>
    </head>
    <body class="container-fluid bg-info">
    <header class="text-light"><h1>Employee Profiles</h1><header>
        <div class="row ml-2">
        ${employeeArr.map((e) => {
            return`<div class="card ml-1" style="width: 18rem;">
            <div class="card-body">
            <h3 class="card-title text-success">Name: ${e.name}</h3>
            <h4 class="card-text text-secondary">Title: ${e.title}</h4>
            <p class="card-text text-dark">ID: ${e.id}</p>
            <p class="card-text text-dark">Email: ${e.email}</p>
            <p class="card-text text-dark">${fieldLabel(e)} ${finalField(e)}</p>
            </div>
        </div>`
        })}
        <div>
    </body>
    </html>`
}

const fieldLabel = (e) => {
    if (e.title === "Manager") {
        return "Office Number:"
    }
    else if (e.title === "Engineer") {
        return "Github username:"
    }
    else if (e.title === "Intern") {
        return "School:"
    }  
   
}

const finalField = (e) => {
    if (e.title === "Manager") {
        return e.officeNumber
    }
    else if (e.title === "Engineer") {
        return e.github
    }
    else if (e.title === "Intern") {
        return e.school
    }  
   
}



module.exports = generateHTML 