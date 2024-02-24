import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.scss']
})
export class OpenComponent {
  constructor(public dialogRef:MatDialogRef<any>){}
  public closeForm(): void { 
    this.dialogRef.close();
    }
}
