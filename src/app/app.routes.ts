import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            { path: 'sign/in', component: SignInComponent },
            // { path: 'index', component: IndexComponent },
            // {
            //     path: 'district',
            //     component: DistrictComponent,
            // },
            // { path: 'district/:districtId/dept', component: DeptComponent },
            // { path: 'district/:districtId/person', component: PersonComponent },
            // { path: 'district/:districtId/dept/:deptId/person', component: PersonComponent },
            // { path: 'person', component: PersonComponent },
        ],
    },
    { path: '**', component: NotFoundComponent },
];
