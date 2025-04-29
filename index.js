//Create a function constructor called Employee that accepts a name, position, and salary.
// Create an array of 5 employees. Write a program that increases the salary by 10% for 
// employees who have the position "developer" and print the updated employee list. (5 pts)

function Employee(name,position,salary){
this.name = name;
this.position = position;
this.salary = salary;

   
}

let employees =    
 [new Employee("Judy", "Product Manager",50000),
new Employee("Mary", "developer",70000),
 new Employee("Hanna", "scrummaster", 100000),
  new Employee("Peter", "reseacher", 30000),
 new Employee("Helena", "developer", 50000)]


 
function increaseSalary(employees){
    employees.forEach(employee=>{
        if (employee.position == "developer" ){
            console.log(employee.salary+=(employee.salary*0.1))
        }else{
            console.log(employee.salary)
        }
    })
}
increaseSalary(employees)
console.log(employees)




 //Given an array of product objects (each with name, price, and inStock properties), 
 // write a function that returns a new array containing only the products that are inStock: 
 // true, and sort the available products by price in ascending order. (5 pts)

    function inStockProducts(products){
       let availableStock = products.filter(product => product.inStock== true).sort((a,b) => a - b);
       console.log(availableStock)
    }
    let products = 
    [
        {name:"Trousers", price: 2000, inStock: true},
        {name: "Dresses", price:3500, inStock:false},
        {name: "Jackets", price:4500, inStock:true}
    ];

    (inStockProducts(products));



 //Create an object called grades where the keys are student names and the 
 // values are arrays of their scores. Write a function that calculates and 
 // prints each student's average score, and if the average is above 70, 
 // print "Pass"; otherwise, print "Fail" next to their name. (5 pts)

let scores = {
    Judy: [10,50,60,20],
    Hannah: [5,9,45,60],
    Kamau: [80,60,70,40]
}

function studentGrades(scores){
    let newscores= Object.entries(scores)
    newscores.forEach(([studentName,grades]) => {
      if ( grades.reduce((accum,grades) => accum+grades,0)/grades.length){
        console.log(`${studentName} has passed`)
      } else{
                console.log(`${studentName} has failed`)
      }
    }

    )
}
studentGrades(scores)




 //Write a function constructor called User that takes username, email, and isActive (boolean). 
 // Create an array of users. Write a program that loops through the array and deactivates 
 // users who have not logged in recently (simulate this with a random isActive: 
 // false assignment) and print out the usernames of active users. (5 pts)

function User(username, email, isActive){
    this.username=username 
    this.email = email
    this.isActive = isActive
}
 let users = 
 [
    new User("gikuni123", "gikunijugy@gmail.com", true),
    new User("palleteMM", "mainapallete@gmail.com", false),
    new User("noelani56", "noelanijoy@gmail.com", true )  


 ]

 function activeUsers(users){
    users.forEach(user => {
        if (user.isActive == false) {
            console.log(`Deactivated - ${user.username}`)
        } else {
            console.log(`Active user - ${user.username}`)
        }
    })
 }

 activeUsers(users)
 
