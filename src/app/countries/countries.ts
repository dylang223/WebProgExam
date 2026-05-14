import { Component, inject } from '@angular/core';
import { ExamApi } from '../exam-api';

@Component({
  selector: 'app-countries',
  imports: [],
  templateUrl: './countries.html',
  styleUrl: './countries.css',
})
export class Countries {
 examapi= inject(ExamApi);
}
