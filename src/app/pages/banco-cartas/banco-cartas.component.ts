import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CardsService } from 'src/app/cards.service';
import { User } from 'src/app/user.models';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-banco-cartas',
  templateUrl: './banco-cartas.component.html',
  styleUrls: ['./banco-cartas.component.scss']
})
export class BancoCartasComponent implements OnInit {




  constructor(

    ) { }

  ngOnInit(): void {
  }


}
