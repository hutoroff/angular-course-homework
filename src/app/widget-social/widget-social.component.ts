import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget-social',
  templateUrl: './widget-social.component.html',
  styleUrls: ['./widget-social.component.css']
})
export class WidgetSocialComponent {

  @Input()
  public info: SocialInfo;

}
