import { Component  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {
  id:any
constructor(private ps: ProductServiceService, private ar:ActivatedRoute,private router:Router){}

 

ngOnInit():void{
   this.ar.params.subscribe((data:any)=>{
    this.id =data["id"]
  })
  this.ps.deleteProduct(this.id).subscribe((data:any)=>{
    alert('product deleted')
    this.router.navigateByUrl("product")
  })
    }
}
