import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chris-component',
  templateUrl: './chris-component.component.html',
  styleUrls: ['./chris-component.component.css']
})
export class ChrisComponentComponent implements OnInit {

  imageUrl!: string

  constructor() { }

  ngOnInit(): void {
    this.imageUrl="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net"

  }

}
