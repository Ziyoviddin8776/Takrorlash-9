const myFunc=function (firstName="Jalol",age=21){
    console.log(firstName,age)
}

myFunc(undefined,100)


let yosh=30;

const ageFunc=function (yosh){
    yosh=40;
    console.log(yosh)
}
ageFunc(yosh)
console.log(yosh)

const object={
    lastName:"Yaxyoyev",
    city:"Shahrisabz"
}

const infoFunc=function (obj){
    obj.lastName="Qayumov";
    obj.city="Qarshi";
    console.log(obj)
}

infoFunc(object)
console.log(object)