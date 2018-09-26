function greet(name?: string): string {
    return `こんにちは、 ${name || "匿名"}さん`;
}

// 引数を省略して実行すると`name`がないため、
// "こんにちは、匿名さん"が返って来ます。
const greeting_message = greet();
