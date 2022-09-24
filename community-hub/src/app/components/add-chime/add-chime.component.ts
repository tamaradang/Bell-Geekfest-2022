import { Component, OnInit } from '@angular/core';
import { Chime } from 'src/app/models/chime.model';
import { ChimeService } from 'src/app/services/chime.service';

@Component({
  selector: 'app-add-chime',
  templateUrl: './add-chime.component.html',
  styleUrls: ['./add-chime.component.css']
})
export class AddChimeComponent implements OnInit {

  chime: Chime = {
    title: '',
    description: '',
    recipient: '',
    author: ''
  };
  submitted = false;

  constructor(private chimeService: ChimeService) { }

  ngOnInit(): void {
  }

  saveChime(): void {
    const data = {
      title: this.chime.title,
      description: this.chime.description,
      recipient: this.chime.recipient,
      author: this.chime.author
    };

    this.chimeService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newChime(): void {
    this.submitted = false;
    this.chime = {
      title: '',
      description: '',
      recipient: '',
      author: ''
    };
  }

}
