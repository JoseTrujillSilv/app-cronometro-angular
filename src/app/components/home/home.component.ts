import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  horas:number = 0;
  minutos:number = 0;
  segundos:number = 0;
  interval:any;
  

  iniciaCron (){
    this.interval = setInterval(() => {
      this.sumSeg();
      if (this.segundos === 60) {
        this.segundos = 0;
        this.sumMinutes();
      }
      if (this.minutos === 60) {
        this.minutos = 0;
        this.sumHours();
      }
    }, 1000); // Cada segundo
  }



  pararCron(){
    clearInterval(this.interval);
  }

  reCron(){
    clearInterval(this.interval);
    this.horas=0;
    this.minutos=0;
    this.segundos=0;
  }






    
  sumSeg(){
    this.segundos++;
  }

  sumMinutes(){
    this.minutos++;
  }

  sumHours(){
    this.horas++;
  }



}
