export interface MyType {
    a: any;
    b: string;
    c?: boolean
}

let c: MyType = {
    a: 1,
    b: 'dwa'
};

c.c = false;
c.a = 'jeden'