import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

  constructor(private router: Router) {}

  title = signal('StockLoggerUI');
  username: string = '';
  password: string = '';

  onLogin() {
    const today = new Date();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');

    const firstFour = mm + dd;

    if (this.username === 'vaibhav.patil' && this.password === firstFour) {
      alert('login success');
      this.router.navigate(['/home']);   
      return;
    } else {
      console.log('Entered:', this.username, this.password);
      console.log('Expected:', firstFour);
      alert('Invalid username or password');
    }
  }
}
