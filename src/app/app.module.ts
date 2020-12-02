import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { ClassicComponent } from './classic/classic.component';
import { TopbarComponent } from './header/topbar/topbar.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { ProductsGridComponent } from './products-grid/products-grid.component';
import { TitleSectionComponent } from './products-grid/title-section/title-section.component';
import { SortingComponent } from './products-grid/sorting/sorting.component';
import { ProductListComponent } from './products-grid/product-list/product-list.component';
import { ProductItemComponent } from './products-grid/product-list/product-item/product-item.component';
import { FiltersComponent } from './products-grid/filters/filters.component';
import { PaginationComponent } from './products-grid/pagination/pagination.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { HeroSectionComponent } from './single-product/hero-section/hero-section.component';
import { ProductDescriptionComponent } from './single-product/product-description/product-description.component';
import { ProductReviewComponent } from './single-product/product-review/product-review.component';
import { ProductRelatedComponent } from './single-product/product-related/product-related.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSummaryComponent } from './checkout/order-summary/order-summary.component';
import { AccordionComponent } from './checkout/accordion/accordion.component';
import { FormCheckoutComponent } from './checkout/form-checkout/form-checkout.component';
import { EmptyCartComponent } from './empty-cart/empty-cart.component';
import { CartComponent } from './empty-cart/cart/cart.component';
import { SubscribeComponent } from './empty-cart/subscribe/subscribe.component';
import { ClientsComponent } from './empty-cart/clients/clients.component';
import { OrderCompletedComponent } from './order-completed/order-completed.component';
import { CartSessionComponent } from './order-completed/cart-session/cart-session.component';
import { SubscribeSectionComponent } from './order-completed/subscribe-section/subscribe-section.component';
import { ClientsSectionComponent } from './order-completed/clients-section/clients-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    ClassicComponent,
    TopbarComponent,
    NavbarComponent,
    ProductsGridComponent,
    TitleSectionComponent,
    SortingComponent,
    ProductListComponent,
    ProductItemComponent,
    FiltersComponent,
    PaginationComponent,
    SingleProductComponent,
    HeroSectionComponent,
    ProductDescriptionComponent,
    ProductReviewComponent,
    ProductRelatedComponent,
    CheckoutComponent,
    OrderSummaryComponent,
    AccordionComponent,
    FormCheckoutComponent,
    EmptyCartComponent,
    CartComponent,
    SubscribeComponent,
    ClientsComponent,
    OrderCompletedComponent,
    CartSessionComponent,
    SubscribeSectionComponent,
    ClientsSectionComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
