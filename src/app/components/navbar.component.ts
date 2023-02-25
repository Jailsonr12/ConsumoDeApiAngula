import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ListModel } from '../models/list-model';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public service: ApiService) {}
  ngOnInit(): void {
    this.getMenuByUser().subscribe((resp) => {});
  }

  getMenuByUser(): Observable<ListModel> {
    return of(ListModel);
  }
}
