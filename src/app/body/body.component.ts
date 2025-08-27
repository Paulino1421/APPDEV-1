import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: false,
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  //Array of colors
  colors: string [] =['#32a852','#543f57' ,'#a81837' ,'#a8b516' ,'#b51616' ]
  currentColorIndex:number = 0;
  //function to change color
  changeNameColor(){
    this.currentColorIndex=
    (this.currentColorIndex +1) %
    this.colors.length;
  }

  //get current color
  get currentColor(): string{
    return this.colors 
    [this.currentColorIndex];
  }
  profile = {
    name:"Jayson Errol D. Paulino",
    title: "Sofware Developer",
    about : 'Passionate about creating beautiful and functional application',
    skill:
    ['angular', 'typescript', 'Html/CSS', 'Responsive Design'],
    experience:[
    {
    role:'Web developor',
    company:'Tech solution',
    description:'Develope and maintainng web application using Angular and related technologies'
    },{
      role:'Frontend Intern',
      company:'Digital Creation',
      period:'2021- 2022',
      description:'Assisted in building responsive user interfaces and implementing new features',
    },
  ],
  education:{
    degree:'Bachelor of Science in Computer Science',
    school:'University of Baguio',
    year:'2027',
  },
  contact:{
    email:'123@gmail.com',
    phone:'+22 (244) 2323',
    location:'earth',
  },
  }

}
