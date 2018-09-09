import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserModel } from '../User.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
  persons: UserModel[];
  constructor(private userService: UserService, private router: Router) {
    this.persons = this.userService.users;
    this.userService.data.subscribe((data) => {
      this.persons = data;
    })
  }

  ngOnInit() {
  }

  routeToPersonal() {
    this.router.navigateByUrl('personal');
  }

  editPerson(person: UserModel) {
    this.router.navigate(['/edit', { email:person.email }]);
  }

  deletePerson(person: UserModel) {
    this.userService.deletePerson(person);

  }

}
