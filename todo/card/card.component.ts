import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() myData?:string;
  @Output() selectEvent =new EventEmitter();
  removed:Array<any>=[];
  constructor() { }

  ngOnInit(): void {
  }

  selected(item:any)
  {
    this.selectEvent.emit(item);
  }

}