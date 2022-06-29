const Employee = require("../lib/Employee")

const generateHTML = (employeeArr) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        ${employeeArr.map((e) => {
            return`<section>
            <P>Name:${e.name}</P>
            <P>Title:${e.title}</P>
            <p>ID:${e.id}</p>
            <p>Email:${e.email}</p>
            
        </section>`
        })}
    </body>
    </html>`
}



module.exports = generateHTML 