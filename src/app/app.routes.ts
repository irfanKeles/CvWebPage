import { Routes } from '@angular/router';
import { MainComponent } from './@layout/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './@layout/notfound/notfound.component';

export const routes: Routes = [
    {
        path:'',
        component: MainComponent,
        children:[
            {
                path:'',
                component:HomeComponent
            },
            {
                path:'home',
                component:HomeComponent
            },
            {
                path:'**',
                component:NotfoundComponent,
                title:'Sayfa Bulunamadı'
            }
        ]
    }
];
