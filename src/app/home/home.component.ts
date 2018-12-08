import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string = 'angular7';

  gender: string = 'ay7aga';

  primaryX: string = 'btn btn-primary';

  image: string = '../assets/coffee.png';

  show: boolean = false;

  names: any[] = ['Ahmed', 'Dina', 'Sara'];



  constructor() { }

  ngOnInit() {
  }
  changeData() {
    this.show = true;
  }
}
