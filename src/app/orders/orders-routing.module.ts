import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MainOrderComponent } from './components/main-order/main-order.component'

const routes: Routes = [
    {
        path: '',
        component: MainOrderComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class OrdersRoutingModule {}