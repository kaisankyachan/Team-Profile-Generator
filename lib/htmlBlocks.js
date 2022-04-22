// sets up the header html content
const headerHTMLBlock = function () {
    return `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

        <title>My Team</title>
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid text-center bg-dark">
            <div class="container">
                <h1 class="display-4 text-light">My Team</h1>
            </div>
        </div>
        <div class = "container">
            <div class="col-md-12">
                <div class="row justify-content-center">
`
};

// generates html for the manager that the user input
const managerHTMLBlock = function (array_content) {
    return `
                    <div class="card m-2">
                        <div class="card-header">
                            <h1>${array_content.name}</h1>
                            <hr>
                            <h2><i class="bi bi-coin"></i> Manager</h2>
                        </div>
                        <div class= "card-body">
                            <div class="list-group list-group-flush">
                                <p class="list-group-item">ID: <span>${array_content.id}</span></p>
                                <p class="list-group-item">Email: <span><a href="mailto: ${array_content.email}" target="_blank">${array_content.email}</a></span></p>
                                <p class="list-group-item">Office Number: <span>${array_content.officeNumber}</span></p>
                            </div>
                        </div>
                    </div>
`
};

// generates html for each engineer that the user input
const engineerHTMLBlock = function (array_content) {
    return `
                    <div class="card m-2">
                        <div class="card-header">
                            <h1>${array_content.name}</h1>
                            <hr>
                            <h2><i class="bi bi-gear-fill"></i> Engineer</h2>
                        </div>
                        <div class= "card-body">
                            <div class="list-group list-group-flush">
                                <p class="list-group-item">ID: <span>${array_content.id}</span></p>
                                <p class="list-group-item">Email: <span><a href="mailto: ${array_content.email}" target="_blank">${array_content.email}</a></span></p>
                                <p class="list-group-item">GitHub: <span><a href="https://github.com/${array_content.gitUser}" target="_blank">${array_content.gitUser}</a></span></p>
                            </div>
                        </div>
                    </div>
`
};

// generates html for each intern that the user input
const internHTMLBlock = function (array_content) {
    return `
                    <div class="card m-2">
                        <div class="card-header">
                            <h1>${array_content.name}</h1>
                            <hr>
                            <h2><i class="bi bi-mortarboard-fill"></i> Intern</h2>
                        </div>
                        <div class= "card-body">
                            <div class="list-group list-group-flush">
                                <p class="list-group-item">ID: <span>${array_content.id}</span></p>
                                <p class="list-group-item">Email: <span><a href="mailto: ${array_content.email}">${array_content.email}</a></span></p>
                                <p class="list-group-item">School: <span>${array_content.school}</span></p>
                            </div>
                        </div>
                    </div>
`
};

// sets up the html footer content
const footerHTMLBlock = function() {
    return `
                </div>
            </div>
        </div>  
    </body>
</html>`
};

module.exports = {
    manager: managerHTMLBlock,
    engineer: engineerHTMLBlock,
    intern: internHTMLBlock,
    header: headerHTMLBlock,
    footer: footerHTMLBlock,
}