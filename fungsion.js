function greeting (yoga,language){
if(language === "english"){
    console.log(`good morning ${yoga}!`);
} else if(language === "sunda") {
    console.log(`maturnuhun ${yoga}!`);
} else {
    console.log(`selamat pagi ${yoga}!`);
}
 }

greeting("yoga", "sunda");

//bagian dua
const greeting = function(eko, languange) {
    if(language=== "english") {
    return "good morning " + eko + "!";
}else if (language === "jawa "){
    return "sugeng enjang " +   eko + "!";
}
}
console.log(greeting('eko','english'));