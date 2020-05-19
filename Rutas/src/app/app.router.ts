import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router"
import { HomeComponent } from './Inicio/home/home.component';
const rutas: Routes=[
{
    path:'/Inicio',
    component: HomeComponent  
}
]

@NgModule({
    imports:[RouterModule.forRoot(rutas)],
    providers:[],
    declarations:[],
    exports:[RouterModule]
})
export class appRouterComponent{

}