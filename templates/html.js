const generateHTML = function (teamstr) {

    console.log("Inside gen html");
    return `<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Employee Summary</title>

</head>

<body>
<div>
   <h1>My Team</h1>
</div>
<div>
     ${teamstr} 
     </div>
</body>

</html>`

}

const generateCard = function (arr) {
    let roleInfo;

    if (arr.role === "Manager") {
        roleInfo = `Office Number: ${arr.office}`
    } else if (arr.role === "Engineer") {
        roleInfo = `Github Username: ${arr.github}`
    } else if (arr.role === "Intern") {
        roleInfo = `School: ${arr.school}`
    }

    return `<div class="card">
<div class="card-header">
<h2>${arr.name}</h2>  
<h2><i class="role"></i> ${arr.role}</h2>
<hr>
</div>
<div class="card-body">
<ul>
    <li>ID: ${arr.id}</li>
    <li>Email: ${arr.email}</li>
    <li>${roleInfo} </li>
</ul>
</div>
</div>`
}

exports.generateHTML = generateHTML
exports.generateCard = generateCard;
