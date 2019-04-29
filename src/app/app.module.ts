import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { tmiReducer } from './store/reducers/tmi.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TmiConnectionEffects } from './tmi/effects/tmi-connection.effects';
import { TmiService } from './tmi/tmi.service';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      tmi: tmiReducer
    }),
    EffectsModule.forRoot([
      TmiConnectionEffects
    ]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [TmiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
