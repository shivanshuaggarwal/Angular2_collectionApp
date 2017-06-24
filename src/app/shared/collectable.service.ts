import { Collectable } from "./collectable.model";

export class CollectableService {
  private collectables: Collectable[] = [
    {description: 'And then there were none', type:'book'},
    {description: 'Augutha Crisite', type:'author'},
    {description: 'titanic collage', type:'photo'},
    {description: 'banana peals', type:'garbage'},
 ];
 
  private collection: Collectable[]=[];

  getCollectables(){
    return this.collectables;
  }
 
  getCollection(){
    return this.collection;
  }

  addToCollection(item: Collectable){
      if(this.collection.indexOf(item)!==-1){
          return;
      }
      this.collection.push(item);
  }
  
  removeFromCollection(item: Collectable){
      this.collection.splice(this.collection.indexOf(item),1);    
  }
}