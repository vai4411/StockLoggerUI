import { Component } from '@angular/core';
import { Stock } from '../../Models/stock.model';
import { FormsModule } from '@angular/forms';
import { InfoService, InfoResponse } from '../../services/info';
import { Router } from '@angular/router';
import { STOCKS } from '../../data/stockData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-insert',
  imports: [FormsModule, CommonModule],
  templateUrl: './insert.html',
  styleUrl: './insert.scss',
})
export class Insert {
stock: Stock = {
    stock_name: '',
    buy_price: '',
    quantity: ''
  };

  stockList = STOCKS;
  searchText = '';
  showDropdown = false;
  
  constructor(private infoService: InfoService,  private router: Router) {}
  filteredStocks() {
    return this.stockList.filter(s =>
      s.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  selectStock(stock: string) {
    this.searchText = stock;  // Fill textbox
    this.showDropdown = false; // Close dropdown
  }


  onSubmit() {
    this.stock.stock_name = this.searchText;
    this.stock.quantity = this.stock.quantity.toString();
    this.stock.buy_price = this.stock.buy_price.toString();
    console.log('Form Data:', this.stock);
    this.infoService.Insert(this.stock).subscribe({
      next: (res) => {
        console.log("Insert successful:", res);
        alert("Stock inserted successfully!");
      },
      error: (err) => {
        console.error("Insert failed:", err);
        alert("Failed to insert stock!");
      }
    });
    this.router.navigate(['/home']);
  }
}
