function printData(){
    console.log(this.name) ;
}

const test = (name , views) => {
   return {
    name : name ,
    views : views ,
    printData : printData
   } ;
} 

let test2 = test("algebra" , 22) ;
let test1 = test("analyse" , 5) ;

test2.printData() ;
test1.printData() ;