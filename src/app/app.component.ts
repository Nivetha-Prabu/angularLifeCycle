import { Component , OnInit, ViewChild, AfterViewChecked, AfterViewInit } from '@angular/core';
import { Customer } from './customer';
import { EmployeeBonusComponent } from './employee-bonus/employee-bonus.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  // title = 'angular-lifecycle-hooks';
  // message = '';
  // messages = '';
  // customer: Customer = new Customer();
  // name = '';
  // code = 0;
  // cityName = 'Delhi';
  // monthSalary: number;
  // @ViewChild(EmployeeBonusComponent, {static: false}) bonusCalculate: EmployeeBonusComponent;

  // updateMessage() {
  //   this.messages = this.message;
  // }
  // updateCustomer() {
  //   this.customer = new Customer();
  //   this.customer.name = this.name;
  //   this.customer.code = this.code;
  // }
  // changeDetails() {
  //    this.cityName = 'NewYork';
  // }

  // AfterViewInit
  // calculateSalary(empId: string) {
  //   this.bonusCalculate.empId = empId;
  // }
  // ngAfterViewInit() {
    // this.bonusCalculate.empBonus = this.bonusCalculate.calculateBonus();
    // this.monthSalary = 50001 + this.bonusCalculate.calculateBonus();
  // }

  // ngAfterViewChecked() {
  //   this.bonusCalculate.empBonus = this.bonusCalculate.calculateBonus();
  //   this.monthSalary = 50001 + this.bonusCalculate.calculateBonus();

  // }



  // trackBy
//   students: any[];

//   constructor() {
//       this.students = [
//           {
//               ID: 'std101', FirstName: 'Santosh', LastName: 'Jena', Branch: 'CSE',
//               DOB: '29/02/1988', Gender: 'Male'
//           },
//           {
//               ID: 'std102', FirstName: 'Anurag', LastName: 'Mohanty', Branch: 'ETC',
//               DOB: '23/05/1989', Gender: 'Male'
//           },
//           {
//               ID: 'std103', FirstName: 'Priyanka', LastName: 'Dewangan', Branch: 'CSE',
//               DOB: '24/07/1992', Gender: 'Female'
//           },
//       ];
//   }

//   getStudents(): void {
//       this.students = [
//           {
//               ID: 'std101', FirstName: 'Santosh', LastName: 'Jena', Branch: 'CSE',
//               DOB: '29/02/1988', Gender: 'Male'
//           },
//           {
//               ID: 'std102', FirstName: 'Anurag', LastName: 'Mohanty', Branch: 'ETC',
//               DOB: '23/05/1989', Gender: 'Male'
//           },
//           {
//               ID: 'std103', FirstName: 'Priyanka', LastName: 'Dewangan', Branch: 'CSE',
//               DOB: '24/07/1992', Gender: 'Female'
//           },
//           {
//               ID: 'std104', FirstName: 'Hina', LastName: 'Sharma', Branch: 'ETC',
//               DOB: '19/08/1990', Gender: 'Female'
//           },
//           {
//               ID: 'std105', FirstName: 'Sambit', LastName: 'Satapathy', Branch: 'CSE',
//               DOB: '12/94/1991', Gender: 'Male'
//           }
//       ];
//   }


// trackByStudentID(index: number, student: any): string {
//   return student.ID;
// }
}

