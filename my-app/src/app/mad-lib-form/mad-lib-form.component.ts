import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mad-lib-form',
  templateUrl: './mad-lib-form.component.html',
  styleUrls: ['./mad-lib-form.component.css']
})
export class MadLibFormComponent implements OnInit {

  @Input() placeholder : string;
  editMode : boolean;

  constructor() {
    this.editMode = true;
   }

  ngOnInit() {
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

}
