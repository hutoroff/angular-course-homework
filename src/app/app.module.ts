import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ElementsComponent } from './elements/elements.component';
import { ElementBigComponent } from './element-big/element-big.component';
import { WidgetWeatherComponent } from './widget-weather/widget-weather.component';
import { WidgetTeddyBearComponent } from './widget-teddy-bear/widget-teddy-bear.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { WidgetDataSelectComponent } from './widget-data-select/widget-data-select.component';
import { DataItemComponent } from './data-item/data-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementsComponent,
    ElementBigComponent,
    WidgetWeatherComponent,
    WidgetTeddyBearComponent,
    CopyrightComponent,
    WidgetDataSelectComponent,
    DataItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
