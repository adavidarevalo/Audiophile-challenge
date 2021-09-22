import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CheckOutMainComponent } from './components/check-out-main/check-out-main.component'


const routes: Routes = [
    {
        path: '',
        component: CheckOutMainComponent
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

export class CheackOutRoutingModule {}