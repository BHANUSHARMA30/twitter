import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AnalyzeComponent } from './analyze/analyze.component';






// import { HttpClientModule } from '@angular/common/http';
// import {TextFieldModule} from '@angular/cdk/text-field';
// import { FormsModule } from '@angular/forms';


// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AboutComponent,
    HomeComponent,
    AnalyzeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
