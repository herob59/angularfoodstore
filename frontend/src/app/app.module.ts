import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/parlials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SearchComponent } from './components/parlials/search/search.component';
import { TagsComponent } from './components/parlials/tags/tags.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { TitleComponent } from './components/parlials/title/title.component';
import { NotFoundComponent } from './components/parlials/not-found/not-found.component';
import { LoadingComponent } from './components/parlials/loading/loading.component';
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { RatingModule } from 'ng-starrating';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputContainerComponent } from './components/parlials/input-container/input-container.component';
import { InputValidationComponent } from './components/parlials/input-validation/input-validation.component';
import { TextInputComponent } from './components/parlials/text-input/text-input.component';
import { DefaultButtonComponent } from './components/parlials/default-button/default-button.component';
import { OrderItemsListComponent } from './components/parlials/order-items-list/order-items-list.component';
import { MapComponent } from './components/parlials/map/map.component'
import { AuthInterceptor } from './auth/auth.interceptor';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';
import { PaypalButtonComponent } from './components/parlials/paypal-button/paypal-button.component';
import { OrderTrackPageComponent } from './components/pages/order-track-page/order-track-page.component';
@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    CartPageComponent,
   TitleComponent,
   NotFoundComponent,
   LoadingComponent,
   CheckoutPageComponent,
   LoginPageComponent,
   RegisterPageComponent,
   InputContainerComponent,
   InputValidationComponent,
   TextInputComponent,
   DefaultButtonComponent,
   OrderItemsListComponent,
   MapComponent,
   PaymentPageComponent,
   PaypalButtonComponent,
   OrderTrackPageComponent,



  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // RatingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass: 'toast-bottom-right',
      newestOnTop: false
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi: true  },
    {provide:HTTP_INTERCEPTORS, useClass:LoadingInterceptor, multi: true  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
