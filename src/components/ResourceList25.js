// Use in case of Block-1 and Block 2
//import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import React from 'react';
import useResources from './useResources';

// Block-1
// Class-based component (The problem is: logic is duplicated in componentDidMount and componentDidUpdate)
// class ResourceList25 extends React.Component
// {
//     state = { resources: [] };

//     async componentDidMount() {
//         const apiUrl = `https://jsonplaceholder.typicode.com/${this.props.resource}`;
//         const response = await axios.get(apiUrl);

//         this.setState({ resources: response.data });
//     }

//     async componentDidUpdate(prevProps) {
//         if(prevProps.resource !== this.props.resource) {
//             const apiUrl = `https://jsonplaceholder.typicode.com/${this.props.resource}`;
//             const response = await axios.get(apiUrl);

//             this.setState({ resources: response.data });
//         }
//     }

//     render() {
//         return (
//             <div>{this.state.resources.length}</div>
//         );
//     }
// }
// End Block-1


// Block-2
// const ResourceList25 = (props) => {
//     const [resources, setResources] = useState([]);

//     const fetchResource = async (resource) => {
//         const apiUrl = `https://jsonplaceholder.typicode.com/${resource}`;
//         const response = await axios.get(apiUrl);

//         setResources(response.data);
//     }

//     useEffect(
//         () => {
//             fetchResource(props.resource);
//         }, 
//         [props.resource]
//     );

//     return (
//         <div>
//             <ul>
//                 {resources.map( record => <li key={record.id}>{record.title}</li> )}
//             </ul>
//         </div>
//     );
// }
// End Block-2


// Block-3

const ResourceList25 = (props) => {
    const resources = useResources(props.resource);

    return (
        <div>
            <ul>
                {resources.map( record => <li key={record.id}>{record.title}</li> )}
            </ul>
        </div>
    );
}
// End Block-3

export default ResourceList25;