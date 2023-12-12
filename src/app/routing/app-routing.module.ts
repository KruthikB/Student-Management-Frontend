import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from '../components/student-list/student-list.component';
import { AddStudentComponent } from '../components/add-student/add-student.component';
import { StudentDetailsComponent } from '../components/student-details/student-details.component';
const routes: Routes = [
  { path: 'details/:id', component: StudentDetailsComponent}, 
  { path: 'student-list', component: StudentListComponent },
  { path: 'add', component: AddStudentComponent },
  { path: 'student-details', component: StudentDetailsComponent },
  { path: '', redirectTo: '/student-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
