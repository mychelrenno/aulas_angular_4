export interface DaoInterface {
    tableName: string;

    insert(Object: any): boolean;
    update(Object: any): boolean;
    delete(id: number): any;
    find(id: number): any;
    findAll(): [any];
}