import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Results } from 'src/app/models/api-return';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public resultListResults$ = new Subject<Results[] | undefined>();
  public nextLink: string = '';

  constructor(public service: ApiService) {}

  ngOnInit(): void {
    this.service.getPokemonList().subscribe(
      (resp) => {
        this.resultListResults$.next(resp.results);
        this.nextLink = resp.info?.next || '';
      },
      (error) => console.log(error)
    );
  }
}
