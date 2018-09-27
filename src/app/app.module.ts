import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule, DatePipe } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './shared/callback/callback.component';
import { ApiService } from './core/api.service';
import { LoadingComponent } from './core/loading.component';
import { UtilsService } from './core/utils.service';
import { FilterSortService } from './core/filter-sort.service';
// import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    CallbackComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [Title, AuthService, ApiService, DatePipe, UtilsService, FilterSortService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule {}
