import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    {
        path: 'menu',
        component: MenuComponent
    },
    {
        path: 'body',
        component: BodyComponent
    },
    {
        path: 'footer',
        component: FooterComponent
    }
];
