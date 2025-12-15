import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpdateStock } from '../../Models/stock.model';
import { InfoService } from '../../services/info';
import { Router } from '@angular/router';
import { STOCKS } from '../../data/stockData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update',
  imports: [FormsModule, CommonModule],
  templateUrl: './update.html',
  styleUrl: './update.scss',
})
export class Update {
  stock: UpdateStock = {
      stock_name: '',
      sell_price: ''
    };
    constructor(private infoService: InfoService,  private router: Router) {}
    
    stockList = STOCKS;
      searchText = '';
      showDropdown = false;
      
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
    this.stock.sell_price = this.stock.sell_price.toString();
    console.log('Form Data:', this.stock);
    this.infoService.Update(this.stock).subscribe({
      next: (res) => {
        console.log("Update successful:", res);
        alert("Stock Updated successfully!");
        localStorage.clear();
      },
      error: (err) => {
        console.error("Update failed:", err);
        alert("Failed to update stock!");
      }
    });
    this.router.navigate(['/home']);
}
}
