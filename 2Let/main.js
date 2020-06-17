console.log("Terhubung-Nyambung");

// Perbedaan Es5 & Es6
// Es5
var myName = "Bukhori_Inst";
// pada Es5 tipe data var mmpunyai klemahan isi data bisa direplace.
myName = "Kubika";
myName = "Kubika_Inst";
console.log(myName);

// es6 tipe data let bisa dirubah, berbeda dengan const yg tdk bisa dirubah
let Name = "Bukhori_Inst";
// Sdangkan pda Es6 mncullah const, agar isi data tidak bisa direplace.
//Name = "Kubika_Inst"; // tidak bsa diireplace sperti ini
console.log(Name);

// Es5
var myCar1 = ['BMW', 'Nissan', 'Toyota'];
for (var i = 0; i < myCar1.length; i++) {
    console.log(myCar1[i]);
}
console.log(i);

// Es6
// const myCar = ['BMW', 'Nissan', 'Toyota'];
// for (let j = 0; j < myCar.length; j++) {
//     console.log(myCar[j]);
//     //console.log(j);
// }
// console.log(j);

// test
var angka = [];
for (var i = 0; i<5; i++);{
    angka.push(i + 1);
}
console.log(angka);
