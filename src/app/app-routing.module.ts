import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Main/components/about-us/about-us.component';
import { MascotasFormComponent } from './Main/components/mascotas-form/mascotas-form.component';
import { MascotasListComponent } from './Main/components/mascotas-list/mascotas-list.component';
import { LoginComponent } from './Main/components/login/login.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/mascotas',
    pathMatch: 'full'
    
  },
  {
    path: 'mascotas',
    component: MascotasListComponent
  },
  {
    path: 'mascotas/aboutus',
    component: AboutUsComponent
  },
  {
    path: 'mascotas/login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
