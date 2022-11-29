import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MediaItemComponent} from './media-item/media-item.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MediaItemListComponent} from './media-item-list/media-item-list.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {FavoriteDirective} from './favorite.directive';
import {CategoryListPipe} from './category-list.pipe';
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {lookupLists, lookupListToken} from "./providers";
import {routing} from "./app.routing";
import {MediaItemFormModule} from "./media-item-form/media-item-form.module";

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatGridListModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    routing,
  ],
  providers: [
    {provide: lookupListToken, useValue: lookupLists}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
