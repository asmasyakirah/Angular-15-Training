import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-stock',
  templateUrl: 'create-stock.component.html',
  styleUrls: ['create-stock.component.css']
})
export class CreateStockComponent {

  public stock: Stock;
  public confirmed = false;
  public exchanges = ['NYSE', 'NASDAQ', 'OTHER'];

  // public nameControl = new FormControl();

  public stockForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required,),
    code: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    price: new FormControl(0, [Validators.required, Validators.min(0)])
  });

  constructor() {
    this.stock =  new Stock('test', 'TS', 0, 0, 'NASDAQ');
  }

  // setStockPrice(price: number) 
  // {
  //   this.stock.price = price;
  //   this.stock.previousPrice = price;
  // }

  // createStock(stockForm:any) 
  // {
  //   console.log('Stock Form ', stockForm);

  //   if (stockForm.valid)
  //   {
  //     this.stock = stockForm.value.stock;
  //     console.log('Stock Form is valid');
  //   }
  //   else
  //   {
  //     console.error('Stock Form is invalid state');
  //   }
  // }

  onSubmit()
  {
    console.log('Stock Form value ', this.stockForm.value);
  }
}
