require('dotenv').config();

let dataPass = process.env.postGresPass;
dataPass = dataPass.replace(/['"]+/g, '');

console.log(dataPass);