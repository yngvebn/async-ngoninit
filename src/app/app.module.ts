import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyAsyncComponentComponent } from './my-async-component/my-async-component.component';
import { MyChildComponentComponent } from './my-async-component/my-child-component/my-child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyAsyncComponentComponent,
    MyChildComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
