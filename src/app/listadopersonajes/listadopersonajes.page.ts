import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-listadopersonajes',
  templateUrl: './listadopersonajes.page.html',
  styleUrls: ['./listadopersonajes.page.scss'],
})
export class ListadopersonajesPage implements OnInit {
  characters = [];
  constructor(private http: HttpClient) { }

  async ngOnInit() {
    this.http
    .get<any>("https://rickandmortyapi.com/api/character")
    .subscribe((res) => {
      console.log(res)
      this.characters = res.results;
    });
  }



}
