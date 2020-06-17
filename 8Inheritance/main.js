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

    // semua function yg ada di dalam class utama(Siswa) dapat dipanggil di anak classnya, tpi property/parameternya harus sama strukturnya.
    gabung() {
        console.log(this.useername + 'Telah bergabung kelas' + this.id_class);
    }

    hitungmember() {
        console.log('Tersedia 100 member');
        console.log('Hi ' + this.useername + ' telah langganan paket ' + this.paket);
    }
}

// let tambahsiswa = new Siswa('Bukhori_Inst ', '120drfj ', 12); // klau tidak mnggunakan id class maka 12 diganti string/ nama kelas langsung.
// tambahsiswa.gabung();

// Membuat class baru daro anak class siswa
class Langganan extends Siswa {
    constructor(useername, paket) {
        super(useername); // knapa mnggunakan super(useername);? karena klau kita ingin anak kelas dari kelas maka kita harus memanggil slah satu parent dari class utama yaitu useername/tdk boleh yang lain.
        this.paket = paket;
    }

    // nama function ini tdk boleh sama dg nama parameter yg ada di constractor finction langganan.
    gabungPaket() {
        console.log('Hi ' + this.useername + ' telah langganan paket ' + this.paket);
    }
}

let tambahLangganan = new Langganan('Bukhori_Inst', 'Premium');
tambahLangganan.hitungmember();