// "匿名"はstringなので、引数nameはstring型
function greet(name) {
    if (name === void 0) { name = "匿名"; }
    return "\u3053\u3093\u306B\u3061\u306F\u3001 " + name + "\u3055\u3093";
}
var greeting_message1 = greet();
// こんにちは、匿名さん
var greeting_message2 = greet("太郎");
// こんにちは、太郎さん
