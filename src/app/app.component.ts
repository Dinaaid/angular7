import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  editMemberX: boolean = false;
  editId: number;
  updatedMember: string;

  newMemberX: string = "";

  members: string[] = ['Ahmed', 'Sarah', 'Dina'];

  editMember(i, updatedMember) {
    this.editMemberX = true;
    this.editId = i;
  }

  addMember(newMember) {
    this.members.unshift(newMember);   
  }

  removeMember(i) {
    this.members.splice(i, 1);
  }
}
