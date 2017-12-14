import { Component, OnInit } from '@angular/core';
import {Employee} from '../../shared/models/employee.model';
import {EmployeesService} from '../shared/services/employees.service';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/isEmpty';
import {SkillsService} from '../shared/services/skills.service';
import {Skill} from '../../shared/models/skill.module';

@Component({
  selector: 'task-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.less']
})
export class WatchComponent implements OnInit {

  id: number;
  employee: Employee;
  skills = [];
  step = 30;
  constructor(private employeeService: EmployeesService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private skillService: SkillsService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = parseInt(params.get('id'), 10);
      this.employee = this.employeeService.giveEmployee();
      this.searchSkill();
    });
    this.employeeService.getEmployeeById(this.id).subscribe((data: Employee) => {
      this.employee = data;
    });
    document.getElementById('js-employee').addEventListener('wheel', (event) => {
      const $sidebar = document.getElementById('js-employee');
      if (0 < event.deltaY) {
        if ($sidebar.scrollTop + this.step <= $sidebar.scrollHeight) {
          $sidebar.scrollTop += this.step;
        } else {
          $sidebar.scrollTop = $sidebar.scrollHeight;
        }
      } else {
        if ($sidebar.scrollTop - this.step >= 0) {
          $sidebar.scrollTop -= this.step;
        } else {
          $sidebar.scrollTop = 0;
        }
      }
    });
  }

  deleteEmployee() {
    this.employeeService.deleteEmployee(this.id).subscribe((data: Employee) => {
      this.employeeService.updateEmployees();
      this.employeeService.getEmployeeById(this.id).isEmpty();
      {
        this.router.navigate(['/system']);
      }
    });
  }

  searchSkill() {
    this.skills.length = 0;
    let k = 0;
    for (const j in this.employee.idskill) {
      if (this.employee.idskill.hasOwnProperty(j)) {
        this.skillService.getSkill(this.employee.idskill[j]).subscribe((skill: Skill) => {
          this.skills[k] = skill.skillName;
          k++;
        });
      }
    }
  }

  deleteCard() {
    this.router.navigate(['/system']);
  }

  edit() {
    this.router.navigate(['/system/edit', `${this.employee.id}`]);
  }
}
