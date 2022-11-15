alasql("CREATE TABLE settings (name STR, tgid STR, closepop STR)");

// alasql.tables.example1.data = [
//     {a:2,b:6},
//     {a:3,b:4}
// ];

alasql("INSERT INTO settings VALUES (\"Иванов Иван Ивановч\", \"@ivanov\", \"sdf\")");

var res = alasql("SELECT * FROM settings");

console.log(res); 


$('button').click(function() {
	// alert('teset');

	var res = alasql("SELECT name FROM settings UPDATE \"sads\" ");
	// var res = alasql("SELECT * FROM settings");
	console.log(res); 
})

// let	name = "Иванов Иван Ивановч"; // ФИО
// let tg_id = "@ivanov"; // телеграм никнейм
// let closePop = false;