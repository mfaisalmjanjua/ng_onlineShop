import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Courses } from './models/course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  courses: Courses[] = [];
  
  constructor(private srv: CourseService) {
    // scroll to top on load /reset
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }
}
