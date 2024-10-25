import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
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

  public isActive(path: string): string {
    const isActive = this.router.isActive(path, {
      paths: 'exact',
      queryParams: 'ignored',
      fragment: 'ignored',
      matrixParams: 'ignored'
    });

    return isActive ? 'activated-route' : 'route';
  }
}
