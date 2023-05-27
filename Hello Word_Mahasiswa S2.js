document.writeln("Hello World");
document.writeln("</br>");

document.writeln("<textarea cols= '100' rows='10'>");
document.writeln("\nNama = Elen");
document.writeln("\nNIM = 20105241017");
document.writeln("\nKelas = TP B 2020");

document.writeln(0b0101);
document.writeln("</textarea");
document.writeln("</br>");

document.writeln("</br>");
var fullname = "Elen Asti Regita";
var firstName = "Elen";
var middleName = "Asti";
var lastName = "Regita";

document.writeln("Nama lengkap: " + fullname);
document.writeln("</br>");
document.writeln("Nama pertama: " + firstName);
document.writeln("</br>");
document.writeln("Nama tengah: " + middleName);
document.writeln("</br>");
document.writeln("Nama belakang: " + lastName);

//perulangan
let counter = 1;
for (; counter <= 10; ) {
  document.writeln("<p>Perulangan ke" + counter + "</p>");
  counter++;
}

//code bintang
function segitiga1(baris) {
  let pola = "";
  for (let i = 1; i <= baris; i++) {
    for (let j = 1; j <= i; j++) {
      pola += "*";
    }
    pola += "</br>";
  }
  return pola;
}
document.writeln(segitiga1(5));

function segitiga2(baris) {
  let pola = "";
  for (let i = 1; i <= baris; i++) {
    for (let j = baris; j >= i; j--) {
      pola += "*";
    }
    pola += "</br>";
  }
  return pola;
}
document.writeln(segitiga2(5));
