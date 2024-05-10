import { Routes } from '@angular/router';
import { EditarComponent } from './vistas/editar/editar.component';
import { AgregarComponent } from './vistas/agregar/agregar.component';
import { HomeComponent } from './vistas/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'editar/:id', component: EditarComponent},
    { path: 'agregar', component: AgregarComponent}
];
