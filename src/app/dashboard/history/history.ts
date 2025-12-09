import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockHistory } from '../../Models/stock.model';
import { FormsModule } from '@angular/forms';
import { InfoService } from '../../services/info';

@Component({
  selector: 'app-history',
  // standalone: true,           // important!
  imports: [CommonModule, FormsModule],
  templateUrl: './history.html',
  styleUrl: './history.scss',
})
export class History {
  historyList: any;
  filteredList: any;  
  displayedList: any;      // data for current page

  searchText: string = '';

  currentPage = 1;
  itemsPerPage = 10;
  totalPages = 1;

ngOnInit() {
    this.loadHistory();
  }

  constructor(private infoService: InfoService){}

  loadHistory() {
    console.log(this.searchText);
    this.infoService.History(this.searchText).subscribe({
      next: (res) => {
        console.log(res);
        this.historyList = res.data;
        this.totalPages = Math.ceil(this.historyList.length / this.itemsPerPage);
        this.updatePage();
      },
      error: (err) => console.error(err)
    });
  }

  search() {
    this.loadHistory();
  }

  resetSearch(){
    this.searchText = '';
    this.loadHistory();
  }

  updatePage() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.displayedList = this.historyList.slice(start, end);
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePage();
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePage();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePage();
    }
  }
}
