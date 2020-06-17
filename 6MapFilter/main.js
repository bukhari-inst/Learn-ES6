// Ambil Elemen
const skills_holder = document.getElementById('skills');

// ES5

// ES6
const yourskills = ['Java programming', 'Web Development', 'Video Editor'];
console.log(yourskills[0]);
skills_holder.innerHTML = yourskills[0];

// menambahkan item kepada array
yourskills.push('DevOps');

// for loop
console.log('-for loop'); // skill adalah parameter untuk dilooping
yourskills.forEach((skill) => /*ero*/ {
    console.log(`${skill}`);
});

// Map, map fungsinya sma sja dengan ForEach, tpi bberapa developer ada yg brpndapat bahwa Map lbih cepat dari ForEach
const printSkills = yourskills.map(skill => {
    return skills;
});

// tampil
skills_holder.innerHTML = yourskills;

// Filter Data
const myPrimarySkill = yourskills.filter(skill => {
    return skill === "Java programming";
    // Atau bisa dengan pengecualian
    //return skill !== "Java programming";
});
// Tampil
console.log(myPrimarySkill);
//skills_holder.innerHTML = myPrimarySkill;