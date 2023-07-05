import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filer'
})
export class FilerPipe implements PipeTransform {

  transform(allproducts:any[],searchTerm:string,propertyName:string): any[]{
    //for holding the search results
    const result:any[] = [];

    if(!allproducts||searchTerm==''||propertyName==''){
        return allproducts;
    }

    allproducts.forEach((item:any)=>{
      //propertyName = SearchTerm
      if(item[propertyName].trim().toLowerCase().includes(searchTerm.trim().toLowerCase())){
        result.push(item)
      }
    })

    return result;
  }

}
