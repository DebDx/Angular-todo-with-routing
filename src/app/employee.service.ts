import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  employeeDetails = [
    { id: 'A', name: '20/11/20', department: 'Hello'},
    { id: 'B', name: '21/11/20', department: 'Hi'},
    { id: 'C', name: '22/11/20', department: 'Hey'},
  ]

  createEmployee(id, name, dept) {
    this.employeeDetails.push({id, name, department: dept})
  }

}
