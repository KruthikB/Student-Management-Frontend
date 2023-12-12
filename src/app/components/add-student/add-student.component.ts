import { Component } from '@angular/core';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  student = {
    name: '',
    department: '',
    phoneNumber: null
  };
  
  constructor(private studentService: StudentService) { }

  onSubmit() {
    this.studentService.addStudent(this.student).subscribe(response => {
      console.log("Student added", response);
      // Reset form after successful submission
      this.student = {
        name: '',
        department: '',
        phoneNumber: null
      };
      // You can also navigate the user to another page or show a success message here.
    }, error => {
      console.log("Error occurred:", error);
    });
  }
}
