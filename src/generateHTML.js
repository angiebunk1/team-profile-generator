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
    <body>
        ${employeeArr.map((e) => {
            return`<section>
            <P>Name:${e.name}</P>
            <P>Title:${e.title}</P>
            <p>ID:${e.id}</p>
            <p>Email:${e.email}</p>
            <p>${fieldTitle(e)}</p>
            <p>${finalField(e)}</P>
        </section>`
        })}
    </body>
    </html>`
}

const fieldTitle = (e) => {
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