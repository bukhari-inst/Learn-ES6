// Ambil Elemen
const skills_holder = document.getElementById('skills');

// ES5

// ES 6
const yourskills = ['Java programming', 'Web Development', 'Video Editor'];
console.log(yourskills[0]);
skills_holder.innerHTML = yourskills[0];

// menambahkan item kepada array
yourskills.push('DevOps');

// for loop

var parent = '<ul>'; // harus menggunakan tipe variabel globalis scope sperti: var/let. tidak bisa menggunakan tipe variabel lokal/constan sperti: const

console.log('-for loop'); // skill adalah parameter untuk dilooping
yourskills.forEach((skill) => /*ero*/ {
    parent += '<li>' + skill + '</li>'; // knapa hrus menggunakan variable bertipe global? karena agar variabell parent bisa terbaca di dalam ForEach ini.
    console.log(`${skill}`);
});

parent += '</ul>';
skills_holder.innerHTML = parent;