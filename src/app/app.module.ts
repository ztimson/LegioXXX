import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouting } from './app.routing';
import {BannerComponent} from './components/banner/banner.component';
import {FooterComponent} from './components/footer/footer.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import { AppComponent } from './containers/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FourOFourComponent} from './views/404/404.component';
import {AboutComponent} from './views/about/about.component';
import {AestivaComponent} from './views/events/aestiva/aestiva.component';
import {CalendarComponent} from './views/events/calendar/calendar.component';
import {HibernaComponent} from './views/events/hiberna/hiberna.component';
import {GalleryComponent} from './views/gallery/gallery.component';
import {HomeComponent} from './views/home/home.component';
import {DrillComponent} from './views/reenact/drill/drill.component';
import {GettingStartedComponent} from './views/reenact/getting-started/getting-started.component';
import {RulesComponent} from './views/reenact/rules/rules.component';

export const APP_COMPONENTS = [
	AboutComponent,
	AestivaComponent,
	AppComponent,
	BannerComponent,
	CalendarComponent,
	DrillComponent,
	GettingStartedComponent,
	HibernaComponent,
	FooterComponent,
	FourOFourComponent,
	GalleryComponent,
	HomeComponent,
	NavbarComponent,
	RulesComponent
]

@NgModule({
  declarations: APP_COMPONENTS,
  imports: [
	  BrowserModule,
	  AppRouting,
	  BrowserAnimationsModule,
	  MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
