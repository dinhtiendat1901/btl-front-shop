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
    PaginationComponent
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
