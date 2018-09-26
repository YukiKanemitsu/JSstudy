function greet(name) {
    return "\u3053\u3093\u306B\u3061\u306F\u3001 " + (name || "匿名") + "\u3055\u3093";
}
// 引数を省略して実行すると`name`がないため、
// "こんにちは、匿名さん"が返って来ます。
var greeting_message = greet();
