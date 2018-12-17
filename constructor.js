function printData(){
    console.log("name : " + this.name) ;
}

function Doc(name){
    this.name = name ;
    this.isEasy = false ;
    this.printData =  printData ;
}

let doc = new Doc("analyse 55f") ;
//console.log(doc) ;
doc.printData() ;