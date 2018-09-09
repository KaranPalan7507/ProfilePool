import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PersonalComponent } from './personal/personal.component';
import { PersonListComponent } from './person-list/person-list.component';
import { AppRoutingModule } from './app.routing';
import { UserService } from './user.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        PersonalComponent,
        PersonListComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        ReactiveFormsModule
    ],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule { }
