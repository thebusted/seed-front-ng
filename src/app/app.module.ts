import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App routing and component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// App structor concept from Concept from https://github.com/mrholek/CoreUI-Angular
// Set app containers
import { DefaultLayoutComponent } from './containers';
const APP_CONTAINERS = [DefaultLayoutComponent];

// Set app components
import { FooterComponent, HeaderComponent } from './components';
const APP_COMPONENTS = [FooterComponent, HeaderComponent];

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BannerComponent } from './components/banner/banner.component';
import { NotfoundLayoutComponent } from './containers/notfound-layout/notfound-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    BannerComponent,
    NotfoundLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
