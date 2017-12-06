import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {EmployeesService} from '../shared/services/employees.service';
import {Employee} from '../../shared/models/employee.model';
import {Skill} from '../../shared/models/skill.module';
import {SkillsService} from '../shared/services/skills.service';

@Component({
  selector: 'task-watch-card',
  templateUrl: './watch-card.component.html',
  styleUrls: ['./watch-card.component.less']
})
export class WatchCardComponent implements OnInit {

  id: number;
  employee: Employee;
  skills = [];

  constructor(private employeeService: EmployeesService,
              private router: Router,
              private activateRoute: ActivatedRoute,
              private skillsService: SkillsService) {}

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(params => {
      this.id = parseInt(params.get('id'), 10);
      this.employeeService.getEmployeeById(this.id).subscribe((empl: Employee) => {
        this.employee = empl;
        this.FindSkills(this.employee);
      });
    });
    this.employee = this.employeeService.giveEmployee();
  }

  FindSkills(employee) {
    this.skills.length = 0;
    if (employee.idskill.length !== 0) {
      for (const i in employee.idskill) {
        if (employee.idskill.hasOwnProperty(i)) {
          this.skillsService.getSkill(employee.idskill[i]).subscribe((skill: Skill) => {
            if (skill) {
              this.skills.push(skill.skillName);
            }
          });
        }
      }
    }
  }

  onClick() {
    this.employeeService.ChangeFlag();
    this.router.navigate(['/system']);
  }

  DeleteEmployee() {
    this.employeeService.deleteEmployee(this.id);
    this.employeeService.getEmployeeById(this.id).subscribe((employee: Employee) => {
      console.log(employee);
      if (!employee) {
        this.employeeService.ChangeFlag();
        this.router.navigate(['/system']);
      }
    });
  }
}
