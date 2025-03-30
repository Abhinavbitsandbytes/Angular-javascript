import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-dark-theme',
  templateUrl: './dark-theme.component.html',
  styleUrls: ['./dark-theme.component.css']
})
export class DarkThemeComponent implements OnInit {

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
  }
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

}
