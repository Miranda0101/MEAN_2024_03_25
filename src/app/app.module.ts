import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/products.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { ProductsService } from './products/products.service';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    UserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ProductsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
