import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OptionsPageComponent } from './options-page/options-page.component';
import { PrivacyPageComponent } from './privacy-page/privacy-page.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'options', component: OptionsPageComponent },
  { path: 'search', component: SearchPageComponent, pathMatch: 'prefix'},
  { path: 'privacy', component: PrivacyPageComponent},
  { path: '**', component: FourOFourComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }