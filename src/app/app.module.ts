import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from "./app-routing.module";
import { IconsModule } from "../core/icons.module";
import { HttpClientModule } from "@angular/common/http";
import { NgxsModule } from "@ngxs/store";
import { NgxsRouterPluginModule } from "@ngxs/router-plugin";
import { NgxsStoragePluginModule } from "@ngxs/storage-plugin";
import { UserState } from "./state/state";

@NgModule({
  declarations: [AppComponent],
  imports: [
    IconsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxsModule.forRoot([]),
    NgxsRouterPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({ key: UserState })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
