import { Injectable } from '@angular/core';
import { Courses } from './models/course';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  course: Courses[] = [
    { title: 'Angular', description: 'complete course', status: 'active' },
    { title: 'Javascript', description: 'complete course', status: 'active' },
    { title: 'Python', description: 'complete course', status: 'active' },
  ];

  constructor() {}

  getCourses(): Observable<Courses[]> {
    return new Observable((observer:Observer<Courses[]>) => {
      setTimeout(() => {
        observer.next(this.course);
      }, 2000);
    });
  }
}
