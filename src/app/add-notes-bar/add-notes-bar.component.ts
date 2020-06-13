import { Component, OnInit } from '@angular/core';
import {DataService} from '../shared/data.service';

@Component({
  selector: 'app-add-notes-bar',
  templateUrl: './add-notes-bar.component.html',
  styleUrls: ['./add-notes-bar.component.css']
})
export class AddNotesBarComponent implements OnInit {

  public title: string;
  public content: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onChangeAddNewNote() {
    this.dataService.setCheckNewNote();
  }

  onCheckNewNote() {
    return this.dataService.getCheckNewNote();
  }

  onChangeTitleNote(event: any): void {
    this.title = event.target.value;
  }

  onChangeContentNote(event: any): void {
    this.content = event.target.value;
  }

  addNewNote(): void {
    this.dataService.createNewNote(this.title, this.content);
    this.dataService.setCheckNewNote();
  }

}
