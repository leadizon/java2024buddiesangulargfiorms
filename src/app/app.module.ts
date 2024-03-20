import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogItemComponent } from './modules/blog/components/blog-item/blog-item.component';
import { BookItemComponent } from './modules/book/components/book-item/book-item.component';
import { BlogListComponent } from './modules/blog/pages/blog-list/blog-list.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CommandBarComponent } from './shared/components/command-bar/command-bar.component';
import { BookService } from './modules/book/services/book.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    provideClientHydration(),
    BookService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
