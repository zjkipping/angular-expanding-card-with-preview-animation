import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { ExpandingCardComponent } from './expanding-card/expanding-card.component';
import { ExpandingCardContentComponent } from './expanding-card/expanding-card-content.component';
import { ExpandingCardPreviewComponent } from './expanding-card/expanding-card-preview.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule],
  declarations: [
    AppComponent,
    ExpandingCardComponent,
    ExpandingCardContentComponent,
    ExpandingCardPreviewComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
