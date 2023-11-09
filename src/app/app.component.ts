import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Courses } from './models/course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  courses:Courses[]=[];

  title = 'onlineShop';
  constructor(private srv:CourseService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.srv.getCourses().subscribe(reponse=>{
      this.courses = reponse;
    })
  }

  onChangeStatusRequest(e:any, index: number){
    this.courses[index].status= e;
    console.log(e, "root")
  }


}
