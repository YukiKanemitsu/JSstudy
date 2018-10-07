public shouldComponentUpdate(nextProps, nextState) {
    if (this.props.hoge !== nextProps.hoge) {
        // props.hogeが変更された場合のみ再レンダリング
        return true
    }
    return false
}