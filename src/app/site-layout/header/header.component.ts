import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/product/product-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
searchterm:any
constructor(private ps:ProductServiceService){}
search(event:any){
this.searchterm =event.target.value
this.ps.search.next(this.searchterm)
}
}
