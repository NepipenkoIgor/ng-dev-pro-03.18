import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(users: any[], searchTerm: string): any {
    if (!searchTerm) {
      return users;
    }
    return users.filter((user) => {
      return `${user.firstName.toLowerCase()} ${user.surname.toLowerCase()}`
        .includes(searchTerm.toLowerCase());
    });
  }

}
