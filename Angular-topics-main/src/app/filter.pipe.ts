import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform {
  transform(value: any, searchTerm: any): any {
    console.log(value);
    return value.filter((item: any)=>{
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    });
  }
}
