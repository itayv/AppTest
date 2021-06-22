import { Component, OnInit, Inject } from '@angular/core';
import { IDialogData, IjokeItem } from '../interfaces';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogData) {console.log(this.data.content)}

  getItemDetails(item:IjokeItem): string {
    console.log(item);
    if(this.data.type == "twopart")
    {
      return item.setup + " " + item.delivery;
    }
    if(this.data.type == "single")
    {
      return item.joke + "";
    }

    return "";
  }

  ngOnInit() {
  }

}
