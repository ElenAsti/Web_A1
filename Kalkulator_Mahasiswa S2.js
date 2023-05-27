document.writeln("Hello Word");
document.writeln("</br>");

document.writeln("<textarea cols= '100' rows='10'>");
document.writeln("\nNama = Elen");
document.writeln("\nNIM = 20105241017");
document.writeln("\nKelas = TP B 2020");

document.writeln(0b0101);
document.writeln("</textarea");
document.writeln("</br>");

document.writeln("</br>");
var fullname = "Elen Asti Regita" 
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
for (;counter <=10;) {
    document.writeln('<p>Perulangan ke' +counter+ '</p>')
    counter++;
}

//code bintang
function segitiga1(baris){
    let pola= '';
    for(let i=1; i<=baris; i++){
        for(let j=1;j <=i ;j++){
        pola += '*';
        }
        pola += '</br>';
    }
    return pola;
}
document.writeln(segitiga1(5));

function segitiga2(baris) {
    let pola = '';
    for(let i=1; i <= baris; i++){
    for (let j = baris; j >= i ; j--){
    pola += '*';
    }
    pola += '</br>';
    }
    return pola;
    }
    document.writeln(segitiga2(5));

function segitiga3(baris) {
    let pola = '';
    for(let i=1; i <= baris; i++){
    for (let j = baris - 1; j >= i; j--){
    pola += "_";
    }
    for (let k=1; k <= i; k++){
    pola += '*';
    }
    pola += '</br>';
    }
    return pola;
    }
    document.writeln(segitiga3(5));
        
//kalkulator
    <body>
    <div>
        <input type="number" id = "angka1">
    
        <select id = "operator">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <input type="number" id = "angka2">
        <span>=</span>
        <span id="hasil">Hasil</span><br><br>
    <button id="submit">Submit</button>
</div>
<script>
    const angka1 =
document.getElementById("angka1");
    const angka2 =
document.getElementById("angka2");
    const operator =
document.getElementById("operator");
    const hasil = document.getElementById("hasil");
    const submit =
document.getElementById("submit");
submit.addEventListener('click', function () {
//hasil.innerText = eval(angka1.value + operator.value + angka2.value);
hasil.innerText = Number(angka1.value) + operator.value + Number(angka2.value);
//hasil.innerText = Number(angka1.value) - Number(angka2.value);
//hasil.innerText = Number(angka1.value) * Number(angka2.value);
//hasil.innerText = Number(angka1.value) / Number(angka2.value);

})

</script>
</body>
</html>