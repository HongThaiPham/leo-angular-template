import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, UserRoutingModule, FormsModule],
  declarations: [UserComponent, HeaderComponent, FooterComponent, UserHomeComponent,],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule { }
