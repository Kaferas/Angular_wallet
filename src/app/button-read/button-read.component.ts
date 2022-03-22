import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-read',
  templateUrl: './button-read.component.html',
  styleUrls: ['./button-read.component.css']
})
export class ButtonReadComponent implements OnInit {

  text!: string
  color!: string 
  snaps!: number
  isSnaped!: string
   
  constructor() { 

  }

  ngOnInit(): void {
    this.text="J'aime"
    this.color="skyblue"
    this.snaps=0;
    this.isSnaped=""
  }

  onClick()
  {
    if(this.snaps <= 0)
    {
      this.snaps ++
      this.text="Deja Aime"
      this.color="red"
      this.isSnaped= "disabled"
    }
    else
    {
      this.ngOnInit()

    }
  }

}
