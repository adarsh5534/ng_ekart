import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-view-prodct',
  templateUrl: './view-prodct.component.html',
  styleUrls: ['./view-prodct.component.css']
})
export class ViewProdctComponent {
  prodid:any 
productdata:any
constructor(private ar:ActivatedRoute, private ps:ProductServiceService){}

ngOnInit():void {
  this.ar.params.subscribe((data:any)=>{
    this.prodid = data["id"]
  })
  this.ps.viewproduct(this.prodid).subscribe((item:any)=>{
    this.productdata=item
    
  })

}
}
