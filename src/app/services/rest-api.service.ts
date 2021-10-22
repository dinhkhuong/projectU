import { Injectable } from '@angular/core';
import { WindowService } from './window.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestAPIService {
  private api_url: any;
  constructor(private win:WindowService, private http: HttpClient) {
    this.api_url = (this.win.nativeWindow.api_setting) ? 
    this.win.nativeWindow.api_setting.root + 
    'wp/v2' : 'http://localhost/useru/wp-json/wp/v2/';
  }
  getProjects(){
    return this.http.get(this.api_url + 'projects');
  }
  getProject(project_id){
    return this.http.get(this.api_url + 'projects/' + 'project_id');    
  }
}
