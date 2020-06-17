// Ambil Elemen
const user_place = document.getElementById('user');

// ES5
const user_logged1 = "Bukhori_Inst";
user_place.innerHTML = "hi, " + user_logged1 + " apa kabar"; //perlu tanda +

// ES 6
const user_logged = "Bukhori_Inst";
user_place.innerHTML = `Hai, ${user_logged} Apa kabar?`; //tidak perlu tnda +