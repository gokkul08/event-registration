import React, { Component, createContext } from 'react';
import { firestore } from '../firebase';
import { collectIdsAndDocs } from '../utilities';

export const ResponsesContext = createContext({ responses: [] });

class ResponsesProvider extends Component {
    state = { responses: [] };

    unsubscribeFromFirestore = null;

    componentDidMount = () => {
        this.unsubscribeFromFirestore = firestore.collection('responses').onSnapshot(snapshot => {
            const responses = snapshot.docs.map(collectIdsAndDocs);
            this.setState({ responses });
        });
    };

    componentWillUnmount = () => {
        this.unsubscribeFromFirestore();
    };

    render() {
        const { responses } = this.state;
        const { children } = this.props;

        return (
            <ResponsesContext.Provider value={responses}>{children}</ResponsesContext.Provider>
        )
    }


}

export default ResponsesProvider;
