// 引数callbackは関数オブジェクトを取り、
// その関数の引数の型と戻り値の型を指定
function onSuccess(callback: (value: string) => void) {
    callback("成功！");
}

// onSuccess()に渡されるのはアロー関数です
onSuccess(value =>console.log(value));