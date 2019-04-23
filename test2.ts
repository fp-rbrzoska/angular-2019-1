import { MyType } from "./test";

let myVar: MyType

export class MyClass {
    private _counter = 0
    public test = 1;
    constructor() {}

    get(): number {
        return this._counter;
    }
 
    incr(): boolean {
        this._counter++;
        return true;
    }
}