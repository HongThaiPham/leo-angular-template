import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [{ path: '', component: UserHomeComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
