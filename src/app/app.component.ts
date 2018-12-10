import { Component, ViewChild, ElementRef } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('updatedMemberX') updatedMemberX: ElementRef;

  membersRef: AngularFireList<any>;

  editMemberX: boolean = false;
  editId: number;
  updatedMember: string = '';

  newMemberX: string = "";

  members$: any;

  constructor(public db: AngularFireDatabase) {
    this.membersRef = db.list('members');
    // Use snapshotChanges().map() to store the key
    this.members$ = this.membersRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  addMember(newMember) {
    this.membersRef.push({ name: this.newMemberX });
    this.newMemberX = '';
  }

  removeMember(key: string) {
    if(confirm('R u sure u wanna delete this?!'))
      this.membersRef.remove(key);
  }

  editMember(key: string, newText: string) {
    this.editMemberX = false;
    // setTimeout( () => this.updatedMemberX.nativeElement.focus() );
    // console.log(newText);
    this.membersRef.update(key, { name: newText });
  }
}
