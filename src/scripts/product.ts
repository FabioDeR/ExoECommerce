/* eslint-disable no-empty-function */
export default class Product {
   
    tab: any[] = [];   
    

    name : string = "";

    price : number = 0 ;

     
     constructor(){}

     async fetchItem(){
       
        await fetch('http://localhost:3000/items')
        .then(data =>data.json())    
        .then(data => data.map((e : any) => this.tab.push({
           name : e.name ,
           price : e.price,
           image: e.imageUrl
        }
         
        ))
        )    
        .catch(e => console.log(e)
        )
      return this.tab       
        
    }

   async render(){
        await this.fetchItem();
        return(
            ` <ul class="bg-red-900">${ this.tab.map((e) => `<li>${e.name} - ${e.price} `).join('')}<ul>`
        )
    }
}