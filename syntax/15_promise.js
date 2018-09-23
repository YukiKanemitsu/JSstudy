function lazy_execute(callback, delay) {
    setTimeout(() => callback(), delay);
};