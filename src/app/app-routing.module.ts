import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { brandsComponent } from './components/brands/brands.component';
import { ProductsComponent } from './components/products/products.component';
import { DetailsComponent } from './components/details/details.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './shared/guards/auth.guard';
import { CheckOutComponent } from './components/check-out/check-out.component';

const routes: Routes = [
  {path:'', canActivate:[authGuard] , component:BlankLayoutComponent ,children:[
    {path:'' , redirectTo:'home' ,pathMatch:'full'},
    {path:'brands',component:brandsComponent},
    {path:'products',component:ProductsComponent},
    {path:'details/:id',component:DetailsComponent},
    {path:'cart',component:CartComponent},
    {path:'categories', component:CategoriesComponent},
    {path:'home',component:HomeComponent},
    {path:'checkout/:id',component:CheckOutComponent}

  
    
  ]},
  {path:'', component:AuthLayoutComponent ,children:[
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    
  ]},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
