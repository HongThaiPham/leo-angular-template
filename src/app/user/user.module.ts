import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [CommonModule, UserRoutingModule],
  declarations: [UserComponent, HeaderComponent, FooterComponent],
  bootstrap: []
})
export class UserModule { }
