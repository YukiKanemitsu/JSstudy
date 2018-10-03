import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Preview } from './Preview';

interface MyComponentProps {
    defaultName?: string;
}

interface MyComponentState {
    name?: string;
}

class MyComponent extends React.Component<MyComponentProps, MyComponentState> {

    constructor(props: MyComponentProps) {
        super(props);
        this.state = {
            name: props.defaultName
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    // stateの変更に関するメソッド
    private handleInputChange(event: React.FormEvent<HTMLInputElement>) {
        event.preventDefault();
        this.setState({ name: event.currentTarget.value });
    }

    // Componentライフサイクルに関するメソッド
    public componentDidMount() {
        console.log('Mounted!');
    }

    // レンダリングに関するメソッド
    public render() {
        return (
            <form>
                <input value={this.state.name} onChange={this.handleInputChange} />
                <Prerview name={this.state.name} />
            </form>
        );
    }
}

const Preview = ({ name }) => {
    return <p>{`Hello ${name}!`}</p>;
};

ReactDOM.render(<MyComponent defaultName='Mike' />, document.getElementById('app'));
