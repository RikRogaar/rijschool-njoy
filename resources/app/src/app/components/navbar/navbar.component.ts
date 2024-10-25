import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    SharedModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private readonly router = inject(Router);

  public readonly routes = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/team', label: 'Team' },
    { path: '/projects', label: 'Projects' },
    { path: '/calendar', label: 'Calendar' },
  ];

  public isOpen = false;

  public toggleMobileMenu() {
    this.isOpen = !this.isOpen;
  }

  public isActive(path: string): boolean {
    return this.router.isActive(path, {
      paths: 'exact',
      queryParams: 'ignored',
      fragment: 'ignored',
      matrixParams: 'ignored'
    });

  }

  public isActiveClass(path: string, mobile: boolean = false): string {
    let className = this.isActive(path) ? 'activated-route' : 'route';

    if (this.isActive(path) && mobile) {
      className += ' mobile-selected';
    }

    return className;
  }
}
