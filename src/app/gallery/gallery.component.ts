import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import jokes from 'src/shared/data/jokes.json';
import { DialogComponent } from 'src/shared/dialog/dialog.component';
import { IjokeItem } from 'src/shared/interfaces';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  jokesList:IjokeItem[] = jokes;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.jokesList);
  }

  jokeOnClick(item:IjokeItem): void {
    const dialogRef = this.dialog.open<DialogComponent,any,boolean>(DialogComponent, {
      width: '500px',
      data: {title: item.id + "_" + item.type,type: item.type , content: this.jokesList.filter(x => x.type == item.type)}
    });
  }

}
