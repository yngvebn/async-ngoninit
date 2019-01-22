import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-child-component',
  templateUrl: './my-child-component.component.html',
  styleUrls: ['./my-child-component.component.scss']
})
export class MyChildComponentComponent implements OnInit {
  @Input() title: string;

  ngOnInit() {
    console.log('Child initted');
  }

  trigger() {
    console.log('this should update the title');
  }
}
