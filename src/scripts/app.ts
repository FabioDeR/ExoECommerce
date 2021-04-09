/* eslint-disable class-methods-use-this */
import'regenerator-runtime/runtime';
import Product from './product';

export default class App {
    htmlNode: HTMLDivElement;

    
     
   

    constructor(elementid: string) {
        this.htmlNode = document.getElementById(elementid);
             // this.tab = tab;

      }


  

    // eslint-disable-next-line class-methods-use-this
//     async fetchItem(){
       
//        await fetch('http://localhost:3000/items')
//        .then(data =>data.json())    
//        .then(data => data.map((e : any) => this.tab.push({
//           name : e.name ,
//           price : e.price,
//           image: e.imageUrl
//        }
        
//        ))
//        )    
//        .catch(e => console.log(e)
//        )
//      return this.tab
      
       
//    }
   
  async generate(){
       const machin = await new Product();
       return machin.render()
       
  }

    

    async renderView() {
        // await this.fetchItem()
        this.htmlNode.innerHTML = 
        `
        <h1>Product List</h1>        
        
        <div>${(await this.generate()).toString()}</div>
        
        `
    }
}


