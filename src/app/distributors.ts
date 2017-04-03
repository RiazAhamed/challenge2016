export interface Distributors {
    name: string;
    parent: Array<string>;
    include: Array<string>;
    exclude: Array<string>;
    length: any;
    distributorFilter(el: any): any;
};
