import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit{
  student: any = null;  // Hold single student details
  studentId: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.studentId = this.route.snapshot.paramMap.get('id');  // Get student ID from route
    this.fetchStudentDetails(this.studentId);
  }

  fetchStudentDetails(id: any): void {
    this.http.get(`http://localhost:8080/api/students/${id}`).subscribe(data => {
      this.student = data as any;
    });
  }
}
