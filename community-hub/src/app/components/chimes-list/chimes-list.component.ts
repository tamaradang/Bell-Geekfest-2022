import { Component, OnInit } from '@angular/core';
import { Chime } from 'src/app/models/chime.model';
import { ChimeService } from 'src/app/services/chime.service';

@Component({
  selector: 'app-chimes-list',
  templateUrl: './chimes-list.component.html',
  styleUrls: ['./chimes-list.component.css']
})
export class ChimesListComponent implements OnInit {

  chimes?: Chime[];
  currentChime: Chime = {};
  currentIndex = -1;
  title = '';

  constructor(private chimeService: ChimeService) { }

  ngOnInit(): void {
    this.retrieveChimes();
  }

  retrieveChimes(): void {
    this.chimeService.getAll()
      .subscribe({
        next: (data) => {
          this.chimes = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveChimes();
    this.currentChime = {};
    this.currentIndex = -1;
  }

}