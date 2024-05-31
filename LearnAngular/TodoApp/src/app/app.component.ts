import { Component } from '@angular/core';
import { Model, Todos } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  model = new Model();
  displayAll: boolean = false;

  getName() {
    return this.model.user;
  }

  getItems() {
    if (this.displayAll) {
      return this.model.items;
    }

    return this.model.items.filter((item) => item.action);
  }

  addItem(value: any) {
    this.model.items.push(new Todos(value, false));
  }
}
