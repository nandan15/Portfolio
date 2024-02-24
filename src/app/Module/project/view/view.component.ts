import { Component } from '@angular/core';
import { ECommerceComponent } from '../e-commerce/e-commerce.component';
import { MatDialog } from '@angular/material/dialog';
import { MovieComponent } from '../movie/movie.component';
import { AugmentedrealtityComponent } from '../augmentedrealtity/augmentedrealtity.component';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  constructor(public dialog:MatDialog){

}

  openDialog():void{
    // this.newEmployee.FirstName="";
    const dialogRef=this.dialog.open(ECommerceComponent,{
      // data:{record:this.newEmployee}
    });
    dialogRef.afterClosed().subscribe(result=>{
      console.log("The dialog was closed");
    });
    dialogRef.afterClosed().subscribe(result=>{
      console.log('The dialog was closed');
      console.log(result);
   
    })
  }
  openDialog1(): void {
    const dialogRef=this.dialog.open(MovieComponent,{

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("the dialog was closed");
    });
    dialogRef.afterClosed().subscribe(result=>{
      console.log('The dialog was closed');
      console.log(result);
    });
}
openDialog2():void{
  const dialogRef=this.dialog.open(AugmentedrealtityComponent,{

  });
  dialogRef.afterClosed().subscribe(result=>{
    console.log("the dialog was closed");
  });
  dialogRef.afterClosed().subscribe(result=>{
    console.log('The dialog was closed');
    console.log(result);
  })

}
}
