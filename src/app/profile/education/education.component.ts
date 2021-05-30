import { Component, OnInit } from '@angular/core';
import { FORMATIONS } from '../mock-formations';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  formations = FORMATIONS;
  constructor() { }

  ngOnInit() {
  }

}
