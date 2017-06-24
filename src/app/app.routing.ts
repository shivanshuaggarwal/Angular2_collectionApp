import { Routes, RouterModule } from '@angular/router';
import { MarketComponent } from "app/market/market.component";
import { CollectionComponent } from "app/collection/collection.component";

const APP_Routes: Routes =[
    { path: '', redirectTo:'/collection',pathMatch:'full'},
    { path: 'collection', component: CollectionComponent},
    { path: 'market', component: MarketComponent}
];

export const routing = RouterModule.forRoot(APP_Routes);