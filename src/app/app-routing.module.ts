import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'gallery', component: GalleryComponent},
  { path: 'login', component: LoginComponent},
  { path: '', pathMatch: 'full' , redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
