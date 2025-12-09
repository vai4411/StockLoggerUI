import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Login } from './login/login'
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {

}
