import {Component, inject} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {SecurityService} from '../../../../security/service/security.service';

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
  private readonly securityService = inject(SecurityService)

  account = this.securityService.accounts$;

  onLogout() {
    this.securityService.logout();
  }
}
