import * as React from 'react';
import { postMessage, Message } from '../client';
import { Button, Form, Segment, TextArea } from 'semantic-ui-react';

interface MessageFormProps {
    channelName: string;
}

interface MessageFormState {
    body?: string;
}