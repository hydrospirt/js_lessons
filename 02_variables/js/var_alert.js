const BIRTHDAY = "666г. до н. э."
const age = parseInt(BIRTHDAY.match(/\d+/)[0], 10);
const currentYear = new Date().getFullYear()
const CHERT = "Ну, и старик!"
let someArray = [1, 2, 3, "Пушка :)", "Бомба :)"]
alert("Вы родились в " + BIRTHDAY + "?");
alert("Похоже вам " + (age + currentYear) + " лет :)");
alert(CHERT);
someArray.forEach(alert);
