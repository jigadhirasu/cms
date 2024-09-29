import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LayoutComponent } from './layout/layout.component';
import { AgentComponent } from './pages/agent/agent.component';
import { DocumentComponent } from './pages/document/document.component';
import { ModelViewComponent } from './pages/model/model-view/model-view.component';
import { ModelEditComponent } from './pages/model/model-edit/model-edit.component';
import { AccountComponent } from './pages/personal/account/account.component';
import { UserComponent } from './pages/personal/user/user.component';
import { StaffComponent } from './pages/personal/staff/staff.component';
import { PartnerComponent } from './pages/personal/partner/partner.component';
import { EmbeddingComponent } from './pages/embedding/embedding.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EmotionComponent } from './pages/voice/pages/emotion/emotion.component';
import { TtsComponent } from './pages/voice/pages/tts/tts.component';
import { SttComponent } from './pages/voice/pages/stt/stt.component';
import { VoiceGroupComponent } from './pages/voice/components/group/group.component';
import { VoiceListComponent } from './pages/voice/components/list/list.component';

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
                        path: 'personal',
                        children: [
                            {
                                path: '',
                                redirectTo: 'account',
                                pathMatch: 'full'
                            },
                            {
                                path: 'account',
                                component: AccountComponent,
                            },
                            {
                                path: 'user',
                                component: UserComponent,
                            },
                            {
                                path: 'partner',
                                component: PartnerComponent,
                            },
                            {
                                path: 'staff',
                                component: StaffComponent
                            }
                        ],
                    },
                    {
                        path: 'model',
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
                        path: 'embedding',
                        component: EmbeddingComponent,
                    },
                    {
                        path: 'document',
                        component: DocumentComponent,
                    },
                    {
                        path: 'agent',
                        component: AgentComponent,
                    },
                    {
                        path: 'agent/profile',
                        component: ProfileComponent,
                    },
                    {
                        path: 'voice',
                        children: [
                            {
                                path: '',
                                redirectTo: 'emotion',
                                pathMatch: 'full'
                            },
                            {
                                path: 'emotion',
                                component: EmotionComponent,
                            },
                            {
                                path: 'tts',
                                component: TtsComponent,
                                children: [
                                    {
                                        path: 'group',
                                        component: VoiceGroupComponent,
                                    },
                                    {
                                        path: 'list',
                                        component: VoiceListComponent,
                                    },
                                ]
                            },
                            {
                                path: 'stt',
                                component: SttComponent,
                                children: [
                                    {
                                        path: 'group',
                                        component: VoiceGroupComponent,
                                    }, {
                                        path: 'list',
                                        component: VoiceListComponent,
                                    },
                                ]
                            }
                        ]
                    }

                ]
            },
        ],
    },
    { path: '**', component: NotFoundComponent },
];
