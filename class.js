var reportedFiles = [] ;

class Doc{
    
    constructor(name , type , uni , school , path , creator , access){
        this.name = name ;
        this.type = type ;
        this.uni = uni ;
        this.school = school ;
        this.path = path ;
        this.creator = creator ;
        this.access = access ;
        this.views = 0 ;
        this.adds = 0 ;
        this.html = "<div> </div>" ;
    }

    reportFile(){
        console.log("report") ;
    }

    addToMyList(user){
        // add doc to user list 
        console.log(`create the user : ${user} first to add files to his list` ) ;
    }

    HTML(){
        this.html = `<div> <h1> ${this.name} </h1> <h2> ${this.type} </h2> <h2> ${this.path} </h2> <h3>${this.uni}/${this.school} </h3> </div>`
        return this.html ;
    }

    getData(all){
        console.log('name : ' + this.name) ;
        console.log('views : ' + this.views) ;
        console.log('adds : ' + this.adds ) ;
        console.log('access : ' + this.access) ;
        if(all == "all"){
            console.log(this.HTML()) ;
        }
    }

}


let file1 = new Doc("test analyse 2015 jan" , "test" , 'sousse' , 'issat' , 'analyse/test' , 'azer belhedi' , 'public') ;

file1.reportFile() ;
file1.addToMyList('wael') ;

//console.log(file1.HTML() );

file1.getData('all') ;