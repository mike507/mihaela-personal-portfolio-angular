import { Component, OnInit } from '@angular/core';
import { SKILLS } from '../mock-skills';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  idx = 3;
  skills_p1 = SKILLS.slice(0, this.idx);
  skills_p2 = SKILLS.slice(this.idx);
  //matrix = [['a', 'b', 'c'],['d', 'e', 'f'],['g', 'h', 'i']];

  constructor() { }

  ngOnInit() {
  }

}
