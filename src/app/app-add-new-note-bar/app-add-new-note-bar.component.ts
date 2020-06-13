import { Component, OnInit } from '@angular/core';
import {DataService} from '../shared/data.service';

@Component({
  selector: 'app-add-new-note-bar',
  templateUrl: './app-add-new-note-bar.component.html',
  styleUrls: ['./app-add-new-note-bar.component.css']
})
export class AppAddNewNoteBarComponent implements OnInit {

  public title: string;
  public content: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
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
