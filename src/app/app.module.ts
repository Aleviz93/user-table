import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserService } from '../services/user.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { AddUserModal } from '../modals/add-user-modal/add-user-modal.component';
import { PhoneMaskDirective } from './phone-mask.directive';
import { EmailMaskDirective } from './email-mask.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    AddUserModal,
    PhoneMaskDirective,
    EmailMaskDirective,
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    BrowserModule,
    MatTableModule,
    FormsModule
  ],
  providers: [UserService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }