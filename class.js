class Doc{

    constructor(name , views){
        this.name = name ;
        this.views = views ;
    }

    printData(){
        console.log(this.name) ;
        console.log(this.views) ;
    }
}

let doc1 = new Doc("analyse test 2018 jan " , 20) ;
let doc2 = new Doc("algebra test 2015" , 180) ;

doc1.printData() ;
doc2.printData() ;