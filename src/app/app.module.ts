import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BlockComponent } from './block/block.component';
import { BlockChainComponent } from './block-chain/block-chain.component';

const appRoutes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    BlockChainComponent,
    BlockComponent
    

  ],
  imports: [
    BrowserModule,
  ],
  providers: [BlockComponent],
  bootstrap: [AppComponent],

})
export class AppModule { }
