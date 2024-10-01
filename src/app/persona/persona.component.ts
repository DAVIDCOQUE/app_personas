import { Component, Input } from '@angular/core';
import { Person } from '../model/person.interface';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  @Input() person: Person;
  @Input() index: number;
  constructor() { }
  ngOnInit() { }
}
