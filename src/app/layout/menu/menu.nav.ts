export type NavItem = {
    name: string;
    path?: string;
    children?: NavItem[];
}

export const NAV_ITEMS = [
    {
        name: 'Personal',
        children: [
            {
                name: 'Account',
                path: '/personal/account'
            },
            {
                name: 'Partner',
            },
            {
                name: 'User',
            },
            {
                name: 'Staff',
            }
        ]
    },
    {
        name: 'Model',
        path: '/model'
    },
    {
        name: 'Agent',

    },
    {
        name: 'Profile',
    },
    {
        name: 'Emotion',
    },
    {
        name: 'Embedding',
    },
    {
        name: 'Voice',
        children: [
            {
                name: 'TTS text-processer',
            },
            {
                name: 'STT text-processer',
            },
        ]
    }
]
