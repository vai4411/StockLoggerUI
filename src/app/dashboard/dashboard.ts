import { Component, OnInit } from '@angular/core';
import { Default } from '../default/default'
import { FormsModule } from '@angular/forms';
import { InfoService, InfoResponse } from '../services/info';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [Default, FormsModule, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  data: any = {};

  constructor(private infoService: InfoService, private router: Router) {}

  ngOnInit(): void {
    this.loadInfo();
    console.log('on init');
  }

  loadInfo() {
    this.infoService.Info().subscribe({
      next: (response: InfoResponse) => {
        if (response.returnCode === "0") {
          this.data = response.data;
          console.log(response.data);
        }
      },
      error: (err) => {
        console.error('Error fetching API:', err);
      }
    });
  }

  insert() {
    this.router.navigate(['/insert']);
    console.log("Insert clicked");
    // add your logic
  }

  update() {
    this.router.navigate(['/update']);
    console.log("Update clicked");
  }

  history() {
    this.router.navigate(['/history']);
    console.log("History clicked");
  }

  onSubmit() {
    console.log("Form submitted");
  }
}
