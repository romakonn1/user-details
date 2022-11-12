import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './components/auth.component';
import { MatCardModule } from "@angular/material/card";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { AuthRoutingModule } from "./auth-routing.module";
import { MatDivider, MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";
import { IconsModule } from "../../../core/icons.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule,
    MatTabsModule,
    FormsModule,
    AuthRoutingModule,
    MatIconModule,
  ]
})
export class AuthModule { }
