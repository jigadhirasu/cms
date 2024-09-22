import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LayoutComponent } from './layout/layout.component';
import { AgentComponent } from './layout/agent/agent.component';
import { ProfileComponent } from './layout/agent/profile/profile.component';
import { DocumentComponent } from './layout/document/document.component';
import { EmotionComponent } from './agent/emotion/emotion.component';
import { ModelComponent } from './model/model.component';
import { ChatComponent } from './model/chat/chat.component';
import { SpeechComponent } from './model/speech/speech.component';
import { EmbeddingComponent } from './model/embedding/embedding.component';

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
                        path: 'agent',
                        component: AgentComponent,
                        children: [
                            { path: ':agent_id/profile', component: ProfileComponent },
                            { path: ':agent_id/emotion', component: EmotionComponent },
                        ]
                    },
                    {
                        path: 'model',
                        component: ModelComponent,
                        children: [
                            { path: 'chat', component: ChatComponent },
                            { path: 'speech', component: SpeechComponent },
                            { path: 'embedding', component: EmbeddingComponent },
                        ]
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
