import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFirst'
})
// Better to name by its functionality
export class MyFirstPipe implements PipeTransform {

  transform(value: any[], keyword: string): any[] {
    if (!keyword){
      return value;
    } else{
      return value.filter((item)=>{
        return item.title.toLowerCase().includes(keyword)
      })
    }
  }

}
