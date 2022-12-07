import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-create-stock',
  templateUrl: 'create-stock.component.html',
  styleUrls: ['create-stock.component.css']
})
export class CreateStockComponent {

  public stock: Stock;
  public confirmed = false;
  public exchanges = ['NYSE', 'NASDAQ', 'OTHER'];
  constructor() {
    this.stock =  new Stock('test', 'TS', 0, 0, 'NASDAQ');
  }

  setStockPrice(price: number) 
  {
    this.stock.price = price;
    this.stock.previousPrice = price;
  }

  createStock(stockForm:any) 
  {
    console.log('Stock Form ', stockForm);

    if (stockForm.valid)
    {
      console.log('Stock Form is valid');
    }
    else
    {
      console.error('Stock Form is invalid state');
    }
  }
}
