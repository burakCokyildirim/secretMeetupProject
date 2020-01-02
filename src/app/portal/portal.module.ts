import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { SelectPageModule } from './select/select.module';
import { SearchPageModule } from "./search/search.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SelectPageModule,
    SearchPageModule,
    PortalRoutingModule,
  ]
})
export class PortalModule { }
