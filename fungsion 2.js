const greeting = function(yoga, language) {
    if(language === "Bekasi") {
        return "Pagi bung " + yoga + "!";
    }else if (language === "jawa") {
        return "esuk mas " + yoga + "!";
    }else {
        return "Pagi " + yoga + "!";
    }
}
console.log(greeting('yoga', 'cirebon'));