import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {  Results } from 'src/app/models/api-return';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public resulthomeResults$ = new Subject<Results[] | undefined>();

  constructor(public service: ApiService) {}
  ngOnInit(): void {
    this.service.getPokemonList().subscribe((resp) => {
      console.log(resp);
      this.resulthomeResults$.next(resp.results);
    });
  }
}
