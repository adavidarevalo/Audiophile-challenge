import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HeadphonesMainComponent } from './components/headphones-main/headphones-main.component'
import { HeadphonesNameComponent } from './components/headphones-name/headphones-name.component'


const routes: Routes = [
    {
        path: '',
        component: HeadphonesMainComponent
    },
    {
        path: ':name',
        component: HeadphonesNameComponent
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

export class HeadphonesRoutingModule {}