// "匿名"はstringなので、引数nameはstring型
function greet(name = "匿名") {
    return `こんにちは、 ${name}さん`;
}
const greeting_message1 = greet();
// こんにちは、匿名さん
const greeting_message2 = greet("太郎");
// こんにちは、太郎さん