import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChrisComponentComponent } from './chris-component/chris-component.component';
import { ButtonReadComponent } from './button-read/button-read.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    ChrisComponentComponent,
    ButtonReadComponent,
    ListUsersComponent,
    FormulaireComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
