import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WidgetWeatherComponent } from './widget-weather/widget-weather.component';
import { WidgetSocialComponent } from './widget-social/widget-social.component';
import { WidgetDataSelectComponent } from './widget-data-select/widget-data-select.component';
import { DataItemComponent } from './data-item/data-item.component';
import { ResortSortPipe } from './common/pipes/resort-sort.pipe';
import { ResortsService } from './common/services/resorts.service';

@NgModule({
  declarations: [
    AppComponent,
    WidgetWeatherComponent,
    WidgetSocialComponent,
    WidgetDataSelectComponent,
    DataItemComponent,
    ResortSortPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ResortsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
