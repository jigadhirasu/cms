import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LayoutComponent } from './layout/layout.component';
import { AgentComponent } from './layout/agent/agent.component';
import { DocumentComponent } from './layout/document/document.component';
import { ModelComponent } from './model/model.component';
import { ModelViewComponent } from './model/model-view/model-view.component';
import { ModelEditComponent } from './model/model-edit/model-edit.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            {
                path: 'sign/in',
                component: SignInComponent
            },
            {
                path: '',
                component: LayoutComponent,
                children: [
                    {
                        path: 'model',
                        component: ModelComponent,
                        children: [
                            {
                                path: '',
                                component: ModelViewComponent
                            },
                            {
                                path: 'edit',
                                component: ModelEditComponent
                            }
                        ]
                    },
                    {
                        path: 'agent',
                        component: AgentComponent,
                    },

                ]
            },
            {
                path: 'document',
                component: DocumentComponent
            },
        ],
    },
    { path: '**', component: NotFoundComponent },
];
