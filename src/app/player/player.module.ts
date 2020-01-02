import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayPageModule } from './play/play.module';
import { FavoritePageModule } from './favorite/favorite.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PlayPageModule,
    FavoritePageModule,
    PlayerRoutingModule
  ]
})
export class PlayerModule { }
