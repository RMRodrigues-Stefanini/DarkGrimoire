import { Component, Input, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { User } from 'src/app/user.models';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',

})
export class LoginFormComponent implements OnInit {


  public userForm = new FormGroup({
    id : new FormControl(''),
    login : new FormControl(''),
    name : new FormControl(''),
    type : new FormControl('')
  })

  constructor(
    private usersService: UsersService,
    ) { }

  ngOnInit(): void {
  }

  submit() {
    debugger;
    const user: User = this.userForm.value;
    this.usersService.save(user).subscribe((login)=> {
      alert(login.id +' Salvo com login ' + login.login)
    });
  }

  delete() {
    const user: User = this.userForm.value;
    this.usersService
      .delete(user.id)
      .subscribe();
  }


}
