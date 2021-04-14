import { Component } from '@angular/core';
import { IStock } from './core/IStockData';
import { StockService } from './core/stock.service';
import { StoragehandlerService } from './core/storagehandler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'insideStocks';

  constructor(private _stockSrv: StockService, private _storageSrv: StoragehandlerService, private router: Router) {

  }

  public saveData() {
    if(this._stockSrv.stockCollection.length > 0) {
      this._storageSrv.saveToLocalStorage(this._stockSrv.stockCollection);
    }
  }

  public loadData() {
    let loadedData = this._storageSrv.loadFromLocalStorage();
    debugger;
    if(loadedData) {
      this._stockSrv.stockCollection = [...loadedData];
      this.router.navigateByUrl('/overview')
    }
  }
}
