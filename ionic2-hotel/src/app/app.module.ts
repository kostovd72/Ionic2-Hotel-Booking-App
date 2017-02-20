import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AvailableRoomsPage } from '../pages/available-rooms-page/available-rooms-page';
import { BookingPage } from '../pages/booking-page/booking-page';
import { SearchPage } from '../pages/search-page/search-page';
import { Rooms } from '../providers/rooms';
 
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AvailableRoomsPage,
    BookingPage,
    SearchPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AvailableRoomsPage,
    BookingPage,
    SearchPage
  ],
  providers: [Rooms]
})
export class AppModule {}
