import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';

import {RouterOutlet} from '@angular/router';

import {ApiResponse} from '../shared/api/data/response/api.response';
import {ApiService} from '../shared/api/service/api.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.scss'
})
export class App implements OnInit {

  protected readonly title: WritableSignal<string> = signal('ExampleApp');

  private readonly api: ApiService = inject(ApiService);

  ngOnInit(): void {
    this.api.get('main').subscribe((data: ApiResponse) => console.log('data', data));
  }
}
