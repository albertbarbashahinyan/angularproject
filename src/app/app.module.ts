import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { ShoppingListComponent } from './components/shopping/shopping-list/shopping-list.component';
import { ModalBlockComponent } from './shared/components/modal-block/modal-block.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ShoppingComponent,
    ShoppingListComponent,
    ModalBlockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
