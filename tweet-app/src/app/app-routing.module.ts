import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AnalyzeComponent } from './analyze/analyze.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"about" ,component:AboutComponent},
  {path:"home", component:HomeComponent},
  {path:"app-analyze",component:AnalyzeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
