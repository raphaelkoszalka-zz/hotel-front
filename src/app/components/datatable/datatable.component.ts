import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  @Input()
  private guests: object[];

  constructor() { }

  ngOnInit() {
    console.log(this.guests);
  }

}
