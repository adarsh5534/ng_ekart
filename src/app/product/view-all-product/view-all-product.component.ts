import { Component } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent {
  productlist:any
  searchkey:any
  filterproducts:any
constructor(private ps:ProductServiceService){}
ngOnInit():void{
this.ps.viewAllProducts().subscribe((data:any)=>{
  // console.log(data)
  this.productlist = data
})
}
filter(category:any){
this.filterproducts=this.productlist.filter((item:any)=>{
  if(item.categoryId==category || category==""){
    return item
  }
})
//access data from behaviour subject
this.ps.search.subscribe((data:any)=>{
  this.searchkey = data
})
}


}

