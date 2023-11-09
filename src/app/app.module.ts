import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {
  LazyLoadImageModule,
  LAZYLOAD_IMAGE_HOOKS,
  ScrollHooks,
} from 'ng-lazyload-image';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { ItemComponent } from './shop/item/item.component';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [AppComponent, CourseComponent, ItemComponent, ShopComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    LazyLoadImageModule,
  ],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }],
  bootstrap: [AppComponent],
})
export class AppModule {}
