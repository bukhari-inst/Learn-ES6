// Ambil Elemen
const data = document.getElementById('data');

// ES5

// ES6
// Modul untuk member class
class Siswa {
    constructor(useername, password, id_class) {
        this.useername = useername;
        this.password = password;
        this.id_class = id_class; //knapa mnggunkan id krna di database kita perlu menggunakan id class, bisa jga lngsung mnggunakan nama kelas tanpa harus menggunakan id class, tpi tipe data tidak bisa brupa angka tpi string ''.
    }

    gabung() {
        console.log(this.useername + 'Telah bergabung kelas' + this.id_class);
    }
}

let tambahsiswa = new Siswa('Bukhori_Inst ', '120drfj ', 12); // klau tidak mnggunakan id class maka 12 diganti string/ nama kelas langsung.
tambahsiswa.gabung();

// test
var angka = [];
for (var i = 0; i<5; i++);{
    angka.push(i + 1);
    //console.log([i]);
}
console.log(angka);