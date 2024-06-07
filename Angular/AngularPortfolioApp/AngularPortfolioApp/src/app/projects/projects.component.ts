import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  constructor(private dataService: DataService) {}
  reposInfo: any;
  async ngOnInit(): Promise<any> {
    this.dataService.getRepos();
    this.reposInfo = this.dataService.reposInfo.subscribe((repos) => {
      this.reposInfo = repos;
      console.log(this.reposInfo);
    });
  }
}
