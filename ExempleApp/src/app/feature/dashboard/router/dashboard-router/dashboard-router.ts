import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-dashboard-router',
  imports: [
    RouterLink,
    RouterOutlet
  ],
  standalone: true,
  templateUrl: './dashboard-router.html',
  styleUrl: './dashboard-router.scss',
})
export class DashboardRouter {

}
