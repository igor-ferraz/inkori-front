import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./features/static/static.module').then(m => m.StaticModule)
    },
    {
        path: 'app',
        loadChildren: () => import('./features/spa/spa.module').then(m => m.SpaModule)
    }
];
