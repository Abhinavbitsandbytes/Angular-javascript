import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WlService {
  private currentTheme = 'light';
  constructor() {
    this.loadTheme();
   }

   loadTheme(){
    const currentTheme = localStorage.getItem('theme');
    this.applyTheme(currentTheme || 'light')
   }
   toggleTheme(){
    this.currentTheme = this.currentTheme==='light'?'dark':'light';
    this.applyTheme(this.currentTheme)
   }
   applyTheme(theme: string){
    this.currentTheme=theme;
    localStorage.setItem('theme', this.currentTheme)

    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${this.currentTheme}-theme`)
    
   }
}
