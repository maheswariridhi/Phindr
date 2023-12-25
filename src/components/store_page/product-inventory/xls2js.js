const XLSX = require('xlsx');
const workbook = XLSX.readFile('Phabin.xlsx');
const sheetName = 'sheet1'; // Change to the name of your sheet

const sheet = workbook.Sheets[sheetName];

const data = XLSX.utils.sheet_to_json(sheet);

console.log(data);