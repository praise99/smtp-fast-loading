
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
  exports: [
    MatPaginatorModule,
    MatSnackBarModule,
    MatButtonModule,
    MatTooltipModule,
  ],
})
export class MaterialModule { }
