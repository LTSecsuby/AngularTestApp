import {Injectable} from '@angular/core';

export interface Notes {
  id: number;
  title: string;
  content: string;
  date: Date;
}

@Injectable({providedIn: 'root'})
export class DataService{

  public checkNewNote = true;
  public arrayNotes: Notes[] = [];
  public id = 0;
  private note: any;
  public idChecked: number = null;
  private dateNew;

  getCheckNewNote(): boolean {
    return this.checkNewNote;
  }
  setCheckNewNote(): void {
    this.checkNewNote = !this.checkNewNote;
  }

  createNewNote(titleNew: string, contentNew: string): void {
    this.id++;
    this.dateNew = new Date().toLocaleString('ru', {year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });
    this.arrayNotes.push({id: this.id, title: titleNew, content: contentNew, date: this.dateNew});
  }
  getAllNote() {
    return this.arrayNotes;
  }

  setCheckedNote(id: number) {
    this.idChecked = id;
  }

  getOneNoteById() {
    this.note = Object.create(null);
    this.arrayNotes.forEach(element => {
      if (element.id === this.idChecked) {
        this.note = element;
      }
    });
    return this.note;
  }
}
