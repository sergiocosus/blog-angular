import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryPageRoutingModule } from './gallery-page-routing.module';
import { GalleriesPageComponent } from './components/galleries-page/galleries-page.component';
import { GalleryModule } from '@app/gallery/gallery.module';
import { SharedModule } from '@app/shared/shared.module';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';
import { ShareButtonsModule } from '@ngx-share/buttons';

@NgModule({
  declarations: [GalleriesPageComponent, GalleryPageComponent],
  imports: [
    CommonModule,
    GalleryPageRoutingModule,
    GalleryModule,
    SharedModule,
    ShareButtonsModule
  ]
})
export class GalleryPageModule {
}
