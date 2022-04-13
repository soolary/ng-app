import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diy-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  public info: { name: string,sex:number,interest:string[],note?:string } = { name: '',sex:0,interest:[] };
  constructor() {}

  ngOnInit(): void {}
}
