import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-list-single',
  templateUrl: './project-list-single.component.html',
  styleUrls: ['./project-list-single.component.scss']
})
export class ProjectListSingleComponent implements OnInit {
  @Input() project: any;
  constructor() { }
  ngOnInit(): void {
  }
}
