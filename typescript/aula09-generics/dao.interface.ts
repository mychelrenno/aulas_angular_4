export interface DaoInterface<T> {
    tableName: string;

    insert(Object: T): boolean;
    update(Object: T): boolean;
    delete(id: number): T;
    find(id: number): T;
    findAll(): Array<T>;
}