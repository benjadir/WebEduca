import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ChooseQuantityComponent } from './components/choose-quantity/choose-quantity.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 *     providers:[
      {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
    ],
 */
@NgModule({
  declarations: [

    CustomInputComponent,
    DatePickerComponent,
    SnackbarComponent,
    DialogBoxComponent,
    ChooseQuantityComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
ReactiveFormsModule
  ],
  exports:[
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    CustomInputComponent,
   ChooseQuantityComponent],

})
export class SharedModule { }
