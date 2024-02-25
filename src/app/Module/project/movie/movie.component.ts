import { Component,ViewEncapsulation } from '@angular/core';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { OpenComponent } from './open/open.component';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class MovieComponent {
constructor(public dialog:MatDialog,public dialogRef:MatDialogRef<any>){}
imageObject=[{
  image:'/assets/movie home.png',
  thumbImage:'/assets/movie home.png',
  title:'Movie Home'
},{
  image:'/assets/movie banner.png',
  thumbImage:'/assets/movie banner.png',
  title:'Movie Banner'
},{
  image:'/assets/movie search.png',
  thumbImage:'/assets/movie search.png',
  title:'Movie Search'
}];
open()
{
  const dialogRef=this.dialog.open(OpenComponent,{
    
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The Dialog was close');
});
}
public closeForm(): void { 
  this.dialogRef.close();
  }
}
