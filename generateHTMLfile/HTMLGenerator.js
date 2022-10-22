//important node modules 
const fs = require('fs');


    //method that generates thre parts of the file
    render() {
        const data = this.renderHeader() + this.renderBody() + this.renderFooter();
        
       
        fs.writeFile("myTeam.html", data, (err) =>
            err ? console.log(err) : console.log('File has been generated')
        );
    }

    
    renderHeader() {
        return `
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Team Profile Generator</title>
                    <!-- bootstrap link -->
                    <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap" rel="stylesheet">
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet">
                    <!-- css styles link -->
                    <link rel="stylesheet" href="./assets/style.css">
                </head>
                <body>
                <header> 
                <nav class="navbar justify-content-center" id="navbar">
                    <h1 id="navbar-title">My Team</h1>
                </nav>
                </header>
                <div class="container">
        `;
    }

    renderBody(){
        return`
            <div class="row justify-content-center">
                <div class="col-4" id="card-size">
                    <div class="card-header mt-5 ">
                        <h2>Jared</h2>
                        <h3><span class="material-icons-outlined"></span>Manager</h3>
                    </div>
                    <div class="card-body">
                        <p class="id">ID: 1</p>
                        <p class="email">Email: <a href="mailto:cpolknytx@gmail.com">cpolknytx@gmail.com</a></p>
                        <p class="office">Office Number: 1</p>
                    </div>
                </div>
            </div>
        `;
    }

    renderFooter(){
        return `
                </div>
                </body>
            </html>
        `;
    }
}



// manager card
// const generateManegerCard = function (manager) {
//     return 
//     `
//         <div class="col-4" id="card-size">
//             <div class="card-header mt-5 ">
//                 <h2>${manager.name}</h2>
//                 <h3><span class="material-icons-outlined"></span>Manager</h3>
//             </div>
//             <div class="card-body">
//                 <p class="id">ID: ${manager.id}</p>
//                 <p class="email">Email: <a href="mailto: ${manager.email}">${manager.email}</a></p>
//                 <p class="office">Office Number: ${manager.officeNumber}</p>
//             </div>
//         </div>
//     </div>
//     `
// };
// engineer card
// const generateEngineerCard = function (engineer) {
//     return 
//     `
//     <div class="col-4" id="card-size">
//         <div class="card-header mt-5">
//             <h2>${engineer.name}</h2>
//             <h3>Engineer</h3>            //add an icon here
//         </div>
//         <div class="card-body">
//             <p class="id">ID: ${engineer.id}</p>
//             <p class="email"> Email: <a href="mailto:${engineer.email}"></a></p> 
//             <p class="github">Github: <a href="http://github.com/${engineer.github}"> ${engineer.github}</a> </p>
//         </div>
//     </div>
//     `
// };

// intern card 
// const generateInternCard = function (intern) {
//     return 
//     ` 
//     <div class="col-4" id="card-size">
//         <div class="card-header mt-5">
//             <h2>${intern.name}</h2>
//             <h3>Intern</h3> //add an icon here 
//         </div>
//         <div class="card-body">
//             <p class="id">ID: ${intern.id}</p>
//             <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
//             <p class="school">School: </p>
//         </div>
//     </div>
//     `
// };

// function generateHTML(data) {
//     myArray= [];
// }

module.exports = HTMLGenerator;




