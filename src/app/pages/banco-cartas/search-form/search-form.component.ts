import { Card } from './../../../user.models';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';
import { CardsService } from 'src/app/cards.service';
import { User } from 'src/app/user.models';
import { UsersService } from 'src/app/users.service';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})



export class SearchFormComponent implements OnInit {

  public users! : User;

  userId =  new FormControl ('');


  constructor(
    private usersService: UsersService,

    ) { }

  ngOnInit(): void {
  }

  getUser(){
    this.usersService.getById(this.userId.value)
   .subscribe((dados) => this.users = dados);
    }







}
