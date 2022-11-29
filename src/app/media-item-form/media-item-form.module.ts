import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MediaItemFormComponent} from "./media-item-form.component";
import {mediaItemFormRouting} from "./media-item-form.routing";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    mediaItemFormRouting,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  declarations: [
    MediaItemFormComponent
  ]

})

export class MediaItemFormModule {


}
