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
                path: 'personal/partner'
            },
            {
                name: 'User',
                path: 'personal/user'
            },
            {
                name: 'Staff',
                path: 'personal/staff'
            }
        ]
    },
    {
        name: 'Voice',
        children: [
            {
                name: 'Emotion',
                path: '/voice/emotion'
            },
            {
                name: 'TTS',
                path: '/voice/tts'
            },
            {
                name: 'STT',
                path: '/voice/stt'
            },
        ]
    },
    {
        name: 'Model',
        path: '/model',
    },
    {
        name: 'Embedding',
        path: '/embedding',
    },
    {
        name: 'Document',
        path: '/document',
    },
    {
        name: 'Agent',
        path: '/agent',
    },
    {
        name: 'Profile',
        path: '/agent/profile',
    },

]
