import { Component, OnInit } from '@angular/core';
import { RestAPIService } from '../../services/rest-api.service';
import { ProjectListSingleComponent } from '../project-list-single/project-list-single.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects: any; 
  constructor(private api: RestAPIService) { }
  ngOnInit(): void {
    this.getProjects();
  }
  getProjects(){
    this.api.getProjects().subscribe(data => {
      this.projects = data;
    })      
  }
}
