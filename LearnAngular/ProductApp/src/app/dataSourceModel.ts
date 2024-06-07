import { product } from './product.model';

export class SimpleData {
  private products: product[];
  constructor() {
    this.products = new Array<product>(
      new product(
        1,
        'Product 1',
        'Description 1',
        'https://picsum.photos/200',
        100
      ),
      new product(
        2,
        'Product 2',
        'Description 2',
        'https://picsum.photos/200',
        200
      ),
      new product(
        3,
        'Product 3',
        'Description 3',
        'https://picsum.photos/200',
        300
      ),
      new product(
        4,
        'Product 4',
        'Description 4',
        'https://picsum.photos/200',
        400
      ),
      new product(
        5,
        'Product 5',
        'Description 5',
        'https://picsum.photos/200',
        500
      ),
      new product(
        6,
        'Product 6',
        'Description 6',
        'https://picsum.photos/200',
        600
      )
    );
  }
  getProducts(): Product[] {}
}
