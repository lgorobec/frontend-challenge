import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {BaseApi} from '../../../shared/core/base-api';
import {Skill} from '../../../shared/models/skill.module';


@Injectable()
export class SkillsService extends BaseApi {
  public skills: Skill;

  constructor (public http: Http) {
    super(http);
  }

  public getSkill(idskill: number): Observable<Skill> {
    return this.get(`skills?id=${idskill}`)
      .map((skill: Skill[]) => skill[0] ? skill[0] : undefined);
  }

  public getSkillByName(name: string): Observable<Skill> {
    return this.get(`skills?skillName=${name}`)
      .map((skill: Skill[]) => skill[0] ? skill[0] : undefined);
  }

  public createNewSkill(skill: Skill): Observable<Skill> {
    return this.post('skills', skill);
  }

  public getAllSkills(): Observable<Skill> {
    return this.get(`skills`);
  }

  public Skills() {
    this.getAllSkills().subscribe((data: Skill) => {
      this.skills = data;
    });
  }
}
