
export type AgentItem = {
    id: string;
    name: string;
    description: string;
    created_at: Date;
    labels?: string[];
}


export const AA: AgentItem[] = [
    {
        id: '1',
        name: 'Agent 1',
        description: 'Agent 1 description',
        created_at: new Date()
    },
    {
        id: '2',
        name: 'Agent 2',
        description: 'Agent 2 description',
        created_at: new Date(),
        labels: ['label1', 'label2']
    },
    {
        id: '3',
        name: 'Agent 3',
        description: 'Agent 3 description',
        created_at: new Date()
    },
    {
        id: '4',
        name: 'Agent 4',
        description: 'Agent 4 description',
        created_at: new Date(),
        labels: ['label3', 'label4']
    },
    {
        id: '5',
        name: 'Agent 5',
        description: 'Agent 5 description',
        created_at: new Date()
    }
]