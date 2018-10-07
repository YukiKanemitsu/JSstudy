public shouldComponentUpdate(nextProps, nextState) {
    // 常にfalseが戻る
    return this.props === nextProps
}