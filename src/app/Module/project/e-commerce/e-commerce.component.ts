import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { OpenComponent } from './open/open.component';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ECommerceComponent {
constructor (public dialog:MatDialog,public dialogRef:MatDialogRef<any>){}

  imageObject = [{
      image: '/assets/express home.png',
      thumbImage: '/assets/express home.png',
      title: 'Express Home'
  }, {
      image: '/assets/express order.png',
      thumbImage: '/assets/express order png.png',
      title: 'Express Order'
  }, {
      image: '/assets/express login.png',
      thumbImage: '/assets/express login.png',
      title: 'Express Login'
  }];
  public closeForm(): void { 
    this.dialogRef.close();
    }

 open()
 {
  const dialogRef=this.dialog.open(OpenComponent,{
    
  });
  dialogRef.afterClosed().subscribe(result=>{
    console.log("The dialog was close");
  });
 }
}

