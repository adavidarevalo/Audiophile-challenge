import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { CartService } from '../../../core/service/cart.service'
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component'
import { FetchOrdersService } from '../../../core/service/fetch-orders.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out-payment',
  templateUrl: './check-out-payment.component.html',
  styleUrls: ['./check-out-payment.component.scss']
})
export class CheckOutPaymentComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  methodPay: any = false
  cartProduct: any = []
  price: any = 0
  count: any = 0
  error: boolean = false

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private fetchOrdersService: FetchOrdersService,
    public router: Router
  ) {
    this.buildForm()
    this.cartService.cartContainer$.subscribe((item: any)=>{
      this.cartProduct = item
      this.realCount()
      this.realPrice()
    })
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required]],
      //shipping
      address: ["", [Validators.required]],
      zip: ["", [Validators.required]],
      city: ["", [Validators.required]],
      country: ["", [Validators.required]],
    })
  }

  ngOnInit(): void {
  }
  seclectPay(e: string){
    this.methodPay = e
  }
  
  realCount(){
    this.count = 0
    this.cartProduct.map((element: any) => {
      this.count = this.count + element.count
    })
  }


  realPrice(){
    this.price = 0
    this.cartProduct.map((pricePlus: any) => {
      this.price = this.price + (pricePlus.count * pricePlus.price)
    })
  }

  deleteProducts(){
    this.cartService.deleteAllProducts()
  }

  plusProduct(operation: any){
    this.price = 0
    let num = operation.actual
    if(operation.actual === 0){
      this.cartService.deleteProduct(operation.name)
    }
    if(operation.sign === 'plus'){
      num = num + 1
    } else {
      num = num - 1
    }
    this.cartService.changeCount({
      name: operation.name,
      count: num
    })
    this.realPrice()
    this.realCount()
  }

  payButton(){
  }

  openDialog() {
    if(!this.form.valid){
      this.error = true
      return 
    }
    this.error = false
    const Information = {
      price: this.price,
      product: this.cartProduct
    }
    this.fetchOrdersService.createPurchase(Information)
    .subscribe(
      item => {
        this.cartProduct = []
      },
      error => console.log(error)
    )
    const dialogRef = this.dialog.open(ModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigateByUrl('/orders');
      this.cartService.deleteAllProducts()
    });
  }
}
