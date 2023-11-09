import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Courses } from '../models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  @Input() cr!: Courses;
  @ViewChild('statusRef') status!: ElementRef<HTMLSelectElement>;
  @Output() sta:any = new EventEmitter<Courses>();

  constructor() {}

  ngOnInit(): void {}
  changeStatus() {
    this.sta.emit(this.status.nativeElement.value)
  }
}
