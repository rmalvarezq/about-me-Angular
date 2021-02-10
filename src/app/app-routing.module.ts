import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { CardsComponent } from './components/cards/cards.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';

const routes: Routes = [
  // { path: 'app-menu', component: MenuBarComponent },
  { path: 'body', component: BodyComponent },
  { path: 'cards', component: CardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
