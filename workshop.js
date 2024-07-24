//class creation 
class Person {
    constructor(firstName, lastName, age ){
        this.firstName = firstName;
        this.lastName = lastName ;
        this.age = age;
    }
    //creation of methode(function)
    fullName (){
        return `the name is ${this.firstName} ${this.lastName} and my age is ${this.age}`
    }
}
class Student extends Person {
    constructor (firstName, lastName, age , studentId){
    super (firstName , lastName , age);
    this.studentId = studentId;}

study () {
return `${this.fullName()} is studying with student id ${this.studentId}`;
}
}

// creation of instance
let PersonOne = new Person ("Rihab", "Naouar" ,28)
let PersonTwo = new Person ("Rim", "Douggui" ,50)

//instance of student class
let studentOne = new Student ("donis" , "gomycode" , 25 , "15268")


/*console.log(PersonOne.fullName());
console.log(PersonTwo.fullName());*/
console.log (studentOne.study()) ;
console.log(studentOne.fullName())