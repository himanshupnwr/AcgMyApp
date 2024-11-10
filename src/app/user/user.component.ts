import { Component, computed, signal, Input, Output, input, output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';
//import { CardComponent, SharedModule } from "../shared/card/card.component";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  //standalone: true,
  //imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  //imports: [SharedModule]
})
export class UserComponent {
  //selectedUser = signal(DUMMY_USERS[randomIndex]);
  //imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

  //decorator based approach for input
  //@Input({ required: true }) id!: string;
  //@Input({ required: true }) avatar!: string;
  //@Input({ required: true }) name!: string;

  @Input ({ required: true }) user!: User;
  @Input ({ required: true }) selected!: boolean;

  @Output() select = new EventEmitter<string>();

  //output using outupt function
  //select = output(<string>);

  //input using signals
  //avatar = input<string>(); 
  //name = input<string>();

  //required input using signal
  //avatar = input.required<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  //using signal format
  //imagePath = computed(() => 'assets/users/' + this.user.avatar)

  onSelectUser() {
    //const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    //this.selectedUser.set(DUMMY_USERS[randomIndex]);
    //this.avatar.set()) this will give error as we cannot use set with read only input signals

    this.select.emit(this.user.id);
  }
}
