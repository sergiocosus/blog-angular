import { NgModule } from '@angular/core';
import { EventsPageComponent } from './components/events-page/events-page.component';
import { EventsPageRoutingModule } from './events-page-routing.module';
import { EventModule } from '@app/event/event.module';
import { SharedModule } from '@app/shared/shared.module';
import { EventPageComponent } from './components/event-page/event-page.component';
import { ShareButtonsModule } from '@ngx-share/buttons';

@NgModule({
  imports: [
    SharedModule,
    EventsPageRoutingModule,
    EventModule,
    ShareButtonsModule,
  ],
  exports: [
  ],
  declarations: [EventsPageComponent, EventPageComponent]
})
export class EventsPageModule {
}
