import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';
import { PersonListComponent } from './person-list/person-list.component';



const routes: Routes = [
  { path: '', redirectTo: '/personal', pathMatch: 'full' },
  { path: 'personal', component: PersonalComponent },
  { path: 'list', component: PersonListComponent },
  { path: 'edit', component: PersonalComponent, }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }