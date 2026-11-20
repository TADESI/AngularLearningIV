import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Rxjs } from './components/rxjs/rxjs';
import {CommonModule} from '@angular/common';
import {Signal} from '@angular/core';
import { TrimmerPipe } from './custom-pipe/trimmer-pipe';
import {CurrencyConverterPipe} from "./custom-pipe/currency-converter-pipe";
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';

@Component({
  imports: [
    RouterOutlet,
    Rxjs,
    CommonModule,
    TrimmerPipe,
    CurrencyConverterPipe,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  // title = signal('siddhant');
  // name = signal('');
  //
  // amount = 100;
  // today = new Date();
  // mobile = 'samsung';
  // user = signal({ name: 'sid', age: 30, email: 'test@gmail.com' });

  title = signal('siddhant is a good player');
  name = signal('my name is prajwal');
  amount = signal(20);
}
