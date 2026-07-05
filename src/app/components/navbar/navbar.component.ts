import { Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { LucideMenu, LucideX } from '@lucide/angular';

@Component({
  selector: 'navbar',
  imports: [RouterLink, RouterLinkActive, LucideMenu, LucideX],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  isMenuOpen = signal(false);
  
  ngOnInit(): void {
    
  }

  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }
}
