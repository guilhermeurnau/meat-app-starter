import { NgModule, ModuleWithProviders } from "@angular/core";

import { InputComponent } from './input/input.component'
import { RadioComponent } from './radio/radio.component'
import { RatingComponent } from './rating/rating.component'
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { OrderService } from "app/order/order.service";
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { SnackbarComponent } from 'app/shared/messages/snackbar/snackbar.component';

import { NotificationService } from 'app/shared/messages/notification.service';

@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, 
        RadioComponent, 
        RatingComponent, 
        CommonModule, 
        FormsModule, 
        SnackbarComponent,
        ReactiveFormsModule]
})


export class SharedModule {
    static forRoot():ModuleWithProviders{
        return {
            ngModule: SharedModule,
            providers: [ShoppingCartService, RestaurantsService, OrderService, NotificationService]
        }
    }
}