class GenericClass<T> {
    constructor(pubric value: T) {}
}

// 引数の型をstringとして扱う
let obj1 = new GenericClass<string>("文字列");

// インターフェース
interface GenericInterface<T> {
    value: T;
}

// valueプロパティの型をnumberとして扱う
let obj2: GenericInterface<number> = {
    value: 1
};