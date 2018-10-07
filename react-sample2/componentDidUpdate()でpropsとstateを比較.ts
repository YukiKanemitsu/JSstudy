public componentDidUpdate(prevProps, prevState) {
    if (prevProps.foo !== this.props.foo) {
        // props.fooが更新された場合の処理
    }
    if (prevState.bar !== this.state.bar) {
        // state.barが更新された場合の処理
    }
}