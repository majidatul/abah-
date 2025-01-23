//ini tipe data
   let firstName = "Gusti";
   let lastName ="Prayoga";
   let age = 16;
   let isMarried = "false";

console.log(`${firstName} ${lastName} ${age} ${isMarried}`)

//ini yang objec
const martabak = {
    nama:"martabak madani",
    city:"cirebon",
    favoriteDirink:"macha",
    favoriteFood:"martabak manis",
    isVegan:false
};
const name = martabak.name;
const favoriteDirink = martabak.favoriteDirink;
console.log (martabak)

//ini bagian array
let evenNumbers = [];
for (let i = 1; i < 101; i++) {
    if (i % 2 === 0) {
    evenNumbers.push(i);
    }
}
console.log(evenNumbers)
