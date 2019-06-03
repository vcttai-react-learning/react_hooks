import React from 'react';
import axios from 'axios';

class ResourceList25 extends React.Component
{
    state = { resources: [] };

    async componentDidMount() {
        const apiUrl = `https://jsonplaceholder.typicode.com/${this.props.resource}`;
        const response = await axios.get(apiUrl);

        this.setState({ resources: response.data });
    }

    async componentDidUpdate(prevProps) {
        if(prevProps.resource !== this.props.resource) {
            const apiUrl = `https://jsonplaceholder.typicode.com/${this.props.resource}`;
            const response = await axios.get(apiUrl);

            this.setState({ resources: response.data });
        }
    }

    render() {
        return (
            <div>{this.state.resources.length}</div>
        );
    }
}

export default ResourceList25;