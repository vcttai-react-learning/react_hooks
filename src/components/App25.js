import React, { useState } from 'react';
import ResourceList25 from './ResourceList25';

// Class-based component
// class App25 extends React.Component
// {
//     state = { resource: 'posts' };
//     render() {
//         return (
//             <div className="ui container">
//                 <div>
//                     <button className="ui button" onClick={() => this.setState({resource: 'posts'})}>
//                         Posts
//                     </button>

//                     <button className="ui button" onClick={() => this.setState({resource: 'todos'})}>
//                         Todos
//                     </button>
//                 </div>
//                 {this.state.resource}
//             </div>
//         );
//     }
// }

const App25 = (props) => {
    const [resource, setResource] = useState('posts');

    return (
        <div className="ui container">
            <div>
                <button className="ui button" onClick={() => setResource('posts')}>
                    Posts
                </button>

                <button className="ui button" onClick={() => setResource('todos')}>
                    Todos
                </button>
            </div>
            
            <ResourceList25 resource={resource} />
        </div>
    );
}

export default App25;