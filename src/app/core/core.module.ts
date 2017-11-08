import { NgModule } from "@angular/core";
import { OrderService } from "app/order/order.service";
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";


@NgModule({
    providers: [ShoppingCartService, RestaurantsService, OrderService]
})

export class CoreModule {

}