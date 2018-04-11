import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(users: any[], searchTerm: string): any {
    if (!searchTerm) {
      return users;
    }
    return users.filter((user) => {
      return `${user.title.toLowerCase()}`
        .includes(searchTerm.toLowerCase());
    });
  }

}
