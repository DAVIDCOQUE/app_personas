import { Component } from '@angular/core';
import { Person } from './model/person.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'List of Person';

 
  people: Person[]= [new Person("david","sanchez"),new Person("jessica","caseres"),new Person("luceri","Garsia")]
  name: string = '';
  last_name: string = '';

  add_person() {

    let person = new Person(this.name , this.last_name );
    this.people.push(person);

  }

}
