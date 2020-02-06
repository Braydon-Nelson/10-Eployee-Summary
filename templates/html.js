const generateHTML = function (teamstr) {

    console.log("Inside gen html");
    return `<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Employee Summary</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

</head>

<body>

<div>
   <h1>My Team</h1>
</div>
<div>
${teamstr} 
</div>


</body>
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

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
