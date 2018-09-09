import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserModel } from '../User.model';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  person: UserModel;
  personalForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    fbProfile: new FormControl('', Validators.required),
    twitterProfile: new FormControl('', Validators.required),
    linkdinProfile: new FormControl('', Validators.required),

  });
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.url[0].path === 'edit' && this.route.snapshot.params.email) {
      this.person = this.userService.getPersonByEmail(this.route.snapshot.params.email);
      if (this.person) {
        this.personalForm.get('name').setValue(this.person.name);
        this.personalForm.get('email').setValue(this.person.email);
        this.personalForm.get('fbProfile').setValue(this.person.fbProfile);
        this.personalForm.get('twitterProfile').setValue(this.person.twitterProfile);
        this.personalForm.get('linkdinProfile').setValue(this.person.linkdinProfile);
      } else {
        this.router.navigate(['/personal']);
      }
    }
  }

  onSubmit() {
    if (this.person) {
      this.userService.editPerson(this.person, new UserModel(this.personalForm.value));
      this.router.navigate(['/list']);
    } else {
      if (this.userService.getPersonByEmail(this.personalForm.value.email)) {
        window.alert('User with same email already exist');
      } else {
        this.userService.addPerson(this.personalForm.value);
        window.alert('Personal Details added');
        this.personalForm.reset();
      }
    }
  }
  routeToList() {
    this.router.navigate(['/list']);
  }

}
