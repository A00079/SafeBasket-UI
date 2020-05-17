import React from 'react';
import './InitialLoad.css';

class InitialLoad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className='Splash-icon center'>
                </div>
            </React.Fragment>
         );
    }
}
 
export default InitialLoad;