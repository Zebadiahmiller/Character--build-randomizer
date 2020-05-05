const sex = ['Male', 'Female']
const selectedSex = sex[Math.floor(Math.random() * sex.length)];
console.log(selectedSex)
document.getElementById('sex').innerHTML = ' ' + selectedSex;