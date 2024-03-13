const fs = require("fs")
const countStudents = (path) => {
	const students = fs.readFileSync(path, "utf-8");
	console.log(students);
}
module.exports = countStudents;
