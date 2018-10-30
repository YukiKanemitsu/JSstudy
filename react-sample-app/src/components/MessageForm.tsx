import * as React from 'react';
import { postMessage, Message } from '../client';
import { Button, Form, Segment, TextArea } from 'semantic-ui-react';
import { render } from 'react-dom';

interface MessageFormProps {
    channelName: string;
}

interface MessageFormState {
    body?: string;
}

export class MessageForm extends React.Component<MessageFormProps, MessageFormState> {

    constructor(props: MessageFormProps) {
        super(props);
        this.state = {
            body: ''
        };
    }
}

public render() {
    return (
        <Segment basic textAlign='center'>
            <Form>
                <Form.Field>
                    <TextArea 
                        autoHeight
                        placeholder='Write your message' />
                </Form.Field>  
                <Button primary type='submit'>Send</Button>
            </Form>        
        </Segment>
    );
}
