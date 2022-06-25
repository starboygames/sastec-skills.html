/*function OnClick(){
var inputvalue = document.getElementById("name");
console.log(inputvalue.style = "border : 5px solid red")
}

var OnClick=() => {
    var inputvalue = document.getElementById("name");
    console.log(inputvalue.style = "border : 5px solid red")  
}

const loadfunction1 = a =>a*a

var x=10

var loadfunction2= a => a+a

var addition = loadfunction2(x)
console.log(addition)

var carre = loadfunction1(loadfunction2(x))
console.log(carre)



var array=[1,2,3,4]


var aff1=(element) =>{
    console.log(element)
}
array.map(aff1)


var aff2=(element) =>{
    return element*2        
}

var aff3= array.map(aff2)
console.log(aff3)
*/

var users = [{id:1, name:"name1", age:19}
             ,{id:2, name:"name2", age:30}
             ,{id:3, name:"name3", age:25}
]



var traitage=(age) =>{
    if(age>20)
    {age=age+2}
    else
    if(age<=20)
    {age=age+1}
    return age
}
var array4

var traitment=(element) =>{
    let newUser = users.map(traituser)
    console.log(users)
    console.log(newUser)
}

var traituser=(element) =>{
    return{"id" :element["id"],"  name":element["name"],"  age" :   traitage(element["age"])}
    
}



traitment()










