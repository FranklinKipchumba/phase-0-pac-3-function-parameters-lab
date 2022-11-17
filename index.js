function introduction(name = "Aki"){
    console.log('Hi, my name is ${name}.');   
}

function introduction(name = "Samip"){
    console.log('Hi, my name is ${name}.');   
}

function introductionWithLanguage(name = "Aki", language = "Ember.js"){
    console.log('Hi, my name is ${name} and I am learning to program in ${language}.');
}  

function introductionWithLanguage(name = "Samip", language = "React"){
    console.log('Hi, my name is ${name} and I am learning to program in ${language}.');
}

function introductionWithLanguageOptional(name = "Gracie", language = "JavaScript"){
    console.log('Hi, my name is ${name} and I am learning to program in ${language}.');
    console.log('Hi, my name is ${name} and I am learning to program in ${language}.');
}

function introductionWithLanguageOptional(name = "Gracie", language = "Python"){
    console.log('Hi, my name is ${name} and I am learning to program in ${language}.');
    console.log('Hi, my name is ${name} and I am learning to program in ${language}.');
}