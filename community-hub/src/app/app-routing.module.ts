import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChimesListComponent } from './components/chimes-list/chimes-list.component';
import { AddChimeComponent } from './components/add-chime/add-chime.component';

const routes: Routes = [
  { path: '', redirectTo: 'chimes', pathMatch: 'full' },
  { path: 'chimes', component: ChimesListComponent },
  { path: 'add', component: AddChimeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
