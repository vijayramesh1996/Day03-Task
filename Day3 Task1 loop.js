var json = [{
    "id": "1",
    "name": "Vijay", 
    "qstn": "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task": "zen portal task no 3"
},
{
    "id": "2",
    "name": "Krishna", 
    "qstn": "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task": "zen portal task no 3"
},
{
    "id": "3",
    "name": "Venkat", 
    "qstn": "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task": "zen portal task no 3"
}

];

// //for loop
for(var i = 0; i < json.length; i++) {
    var object = json[i];
    console.log(object.id)
    console.log(object.name)
    console.log(object.qstn)
    console.log(object.task)
}

// for each loop

json.forEach((key)=>{

    console.log(key)
    console.log(key.id)
    console.log(key.name)
    console.log(key.qstn)
    console.log(key.task)
})

// for in loop

for (let key in json){
console.log(json[key])
console.log(json[key].id)
console.log(json[key].name)
console.log(json[key].qstn)
console.log(json[key].task)
}



