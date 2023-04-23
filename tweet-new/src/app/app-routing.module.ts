import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { IphoneComponent } from './iphone/iphone.component';
import { MacbookComponent } from './macbook/macbook.component';
import { OneplusComponent } from './oneplus/oneplus.component';
import { SkullcandyComponent } from './skullcandy/skullcandy.component';
import { ProductsComponent } from './products/products.component';
import { OpComponent } from './products/op/op.component';

const routes: Routes = [
  {path:"about" ,component:AboutComponent},
  {path:"home", component:HomeComponent},
  {path:"iphone", component:IphoneComponent},
  {path:"macbook", component:MacbookComponent},
  {path:"oneplus", component:OneplusComponent},
  {path:"skullcandy", component:SkullcandyComponent},
  {path:"products", component:ProductsComponent},
  {path:"op", component:OpComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
