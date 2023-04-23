import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import { AboutComponent } from './about/about.component';
import { IphoneComponent } from './iphone/iphone.component';
import { OneplusComponent } from './oneplus/oneplus.component';
import { MacbookComponent } from './macbook/macbook.component';
import { SkullcandyComponent } from './skullcandy/skullcandy.component';
import { ProductsComponent } from './products/products.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { OpComponent } from './products/op/op.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    IphoneComponent,
    OneplusComponent,
    MacbookComponent,
    SkullcandyComponent,
    ProductsComponent,
    OpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
