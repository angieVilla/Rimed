import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: string;
  nameSp: string;
}
@Component({
  selector: 'app-dialog-especialistas',
  templateUrl: './dialog-especialistas.component.html',
  styleUrls: ['./dialog-especialistas.component.less']
})
export class DialogEspecialistasComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogEspecialistasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
