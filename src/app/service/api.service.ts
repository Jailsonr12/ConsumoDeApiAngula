import { Origin, Results } from 'src/app/models/api-return';
import { ApiResults } from './../models/api-return';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public URL_API: string = 'https://rickandmortyapi.com/api/character';

  constructor(public http: HttpClient) {}

  getPokemonList() {
    return this.http.get<ApiResults>(this.URL_API).pipe(
      map((data) => {
        const results = data.results?.map(
          (result) =>
            new Results({
              id: result.id,
              name: result.name,
              status: result.status,
              species: result.species,
              gender: result.gender,
              origin: new Origin({ name: result.origin?.name }),
              image: result.image,
            })
        );
        return new ApiResults({
          results,
          info: {
            count: data.info?.count,
            pages: data.info?.pages,
            next: data.info?.next,
            prev: data.info?.prev,
          },
        });
      })
    );
  }
}
