import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WlService {
currentTheme='';

  constructor(){
   this.currentTheme =  localStorage.getItem('theme') ||  'light'
    this.loadTheme(this.currentTheme)
  }

  changeTheme(theme: string){
    this.currentTheme=this.currentTheme==='light'?'dark':'light';
    localStorage.setItem('theme', this.currentTheme)
    this.loadTheme(this.currentTheme);
  }

  loadTheme(currentTheme: string){
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(currentTheme);
  }

}
