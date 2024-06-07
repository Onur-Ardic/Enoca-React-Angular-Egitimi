import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  constructor(private dataService: DataService) {}
  dataInfo: any;
  async ngOnInit(): Promise<void> {
    this.dataService.getData();
    this.dataInfo = await this.dataService.dataInfo.subscribe((data) => {
      this.dataInfo = data;
    });
  }
}
