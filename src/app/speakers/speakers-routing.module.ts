import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SpeakersMainComponent } from './components/speakers-main/speakers-main.component'
import { SpeakersNameComponent } from './components/speakers-name/speakers-name.component'


const routes: Routes = [
    {
        path: '',
        component: SpeakersMainComponent
    },
    {
        path: ':name',
        component: SpeakersNameComponent
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

export class SpeakersRoutingModule {}