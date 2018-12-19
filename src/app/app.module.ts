import { PopoverPage } from './../components/user/user';
import { PipesModule } from './../pipes/pipes.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ComponentsModule } from '../components/components.module';
import { HttpProvider } from '../providers/http/http';
import { UserProvider } from '../providers/user/user';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'ngx-moment';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PopoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    HttpClientModule,
    MomentModule,
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HttpProvider,
    UserProvider
  ]
})
export class AppModule { }
