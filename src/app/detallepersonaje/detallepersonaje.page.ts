import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-detallepersonaje',
  templateUrl: './detallepersonaje.page.html',
  styleUrls: ['./detallepersonaje.page.scss'],
})
export class DetallepersonajePage implements OnInit {
  profileId: string;
  character;

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.profileId = this.activatedRoute.snapshot.paramMap.get("id");
    this.http
      .get("https://rickandmortyapi.com/api/character/" + this.profileId)
      .subscribe((res) => {
        this.character = res;
      });
  }

}
