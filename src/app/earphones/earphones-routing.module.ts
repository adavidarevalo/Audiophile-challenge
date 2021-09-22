import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { EarphonesMainComponent } from './components/earphones-main/earphones-main.component'
import { EarphonesNameComponent } from './components/earphones-name/earphones-name.component'


const routes: Routes = [
    {
        path: '',
        component: EarphonesMainComponent
    }, 
    {
        path: ':name',
        component: EarphonesNameComponent
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

export class EarphonesHeadphonesRoutingModule {}