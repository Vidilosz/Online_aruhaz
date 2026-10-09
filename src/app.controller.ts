import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service.js';
import type {Product} from './Product.js';

@Controller()
export class AppController {

  jsonData = [
  {
    "name": "Vezeték nélküli egér",
    "category": "elektronika",
    "price": 8990,
    "stock": 12
  },
  {
    "name": "Programozás kezdőknek",
    "category": "könyv",
    "price": 6490,
    "stock": 4
  },
  {
    "name": "Mechanikus billentyűzet",
    "category": "elektronika",
    "price": 24990,
    "stock": 3
  },
  {
    "name": "Fekete kapucnis pulóver",
    "category": "ruházat",
    "price": 12990,
    "stock": 8
  },
  {
    "name": "Catan társasjáték",
    "category": "játék",
    "price": 11990,
    "stock": 0
  },
  {
    "name": "USB-C töltőkábel",
    "category": "elektronika",
    "price": 4990,
    "stock": 25
  },
  {
    "name": "Adidas sportcipő",
    "category": "ruházat",
    "price": 27990,
    "stock": 2
  },
  {
    "name": "A kis herceg",
    "category": "könyv",
    "price": 3990,
    "stock": 15
  },
  {
    "name": "LEGO City rendőrségi állomás",
    "category": "játék",
    "price": 34990,
    "stock": 5
  },
  {
    "name": "Bluetooth hangszóró",
    "category": "elektronika",
    "price": 15990,
    "stock": 7
  }
]

  constructor(private readonly appService: AppService) {}

  @Get("index")
  @Render('index')
  getHello() {
      const products: Product[] = this.jsonData.toSorted((a, b) => a.price - b.price);
      return { products };
  }

  @Get("filter")
  @Render('filter')
  filter(){

  }

  @Get("new")
  @Render('new')
  new(){

  }

  @Get("stats")
  @Render('stats')
  getstats(){
    const products: Product[] = this.jsonData;

    const legdragabbProduct = products.reduce((prev, current) => (prev.price > current.price) ? prev : current);
    const legolcsobbProduct = products.reduce((prev, current) => (prev.price < current.price) ? prev : current);
    const atlagAr = products.reduce((sum, product) => sum + product.price, 0) / products.length;
    const ProductSZama = products.length;

    return { legdragabbProduct, legolcsobbProduct, atlagAr, ProductSZama };

  }
}
