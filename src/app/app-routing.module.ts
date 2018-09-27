import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { CallbackComponent } from './shared/callback/callback.component';

const routes: Routes = [
  { path: '', loadChildren: './user/user.module#UserModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
