import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactPageRoutingModule } from './contact-page-routing.module';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { SharedModule } from '@app/shared/shared.module';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ElementsModule } from '@app/elements/elements.module';
import { OrganizationModule } from '../../modules/organization/organization.module';

@NgModule({
  declarations: [ContactPageComponent],
    imports: [
        CommonModule,
        ContactPageRoutingModule,
        SharedModule,
        ShareButtonsModule,
        ElementsModule,
        OrganizationModule
    ]
})
export class ContactPageModule { }
