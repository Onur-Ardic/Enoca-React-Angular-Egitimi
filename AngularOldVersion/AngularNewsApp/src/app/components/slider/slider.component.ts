import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnChanges {
  @Input() receivedSliderData: any[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {}
}
