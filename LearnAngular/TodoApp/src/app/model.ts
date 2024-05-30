export class Model {
  user;
  items;

  constructor() {
    this.user = 'Onur';
    this.items = [
      new Todos('Koşu', true),
      new Todos('Spor', false),
      new Todos('Kitap', false),
      new Todos('Angular Öğren', false),
    ];
  }
}

export class Todos {
  desc: string;
  action: boolean;

  constructor(desc: string, action: boolean) {
    this.desc = desc;
    this.action = action;
  }
}
