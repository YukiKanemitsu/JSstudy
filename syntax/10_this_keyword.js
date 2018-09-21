const person = {
    name: "太郎",
    lazy_hello: function () {
        setTimeout(function () {
            console.log(`hello! ${this.name}さん`);
        }.bind(this), 1000);
        // これでpersonのthisが無名関数のthisとして束縛される
    }
};

// 期待通り"hello! 太郎さん"と出力される
person.lazy_hello();