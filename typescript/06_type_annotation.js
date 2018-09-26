// 省略可能な引数が先に来ているのでエラーになります
function greet(name, suffix) {
    return "\u3053\u3093\u306B\u3061\u306F\u3001 " + (name || "匿名") + " " + suffix;
}
var greeting_message = greet("さん");
// こんにちは、匿名さん
