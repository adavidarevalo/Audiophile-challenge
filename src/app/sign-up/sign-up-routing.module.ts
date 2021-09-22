import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SingUpMainComponent } from './components/sing-up-main/sing-up-main.component'

const routes: Routes = [
    {
        path: '',
        component: SingUpMainComponent
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

export class SignUpRoutingModule {}