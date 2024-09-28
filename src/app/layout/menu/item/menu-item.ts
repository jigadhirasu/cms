export type MenuItem = {
    name: string;
    depth?: number;
    parent?: MenuItem;
    path?: string;
    is_open?: boolean;
    children?: MenuItem[];
}



export const itemComplete = (item: MenuItem) => {

    item.depth = 1 + (item.parent?.depth || 0);

    item.children?.map((child) => {
        child.parent = item;
        itemComplete(child);
    });


}