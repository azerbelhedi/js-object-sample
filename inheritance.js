class Person{

    constructor(name , lastName){
        this.name = name ;
        this.lastName = lastName ;
    }

    sayHi(){
        console.log(`hello ${this.name}`) ;
    }
}


class Student extends Person{
    constructor(name , lastName , school){
        super(name , lastName) ;
        this.school = school ;
    }
}

let student1 = new Student('azer' , 'belhedi' , "issatso") ;

student1.sayHi() ;