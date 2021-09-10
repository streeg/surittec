import React, { Component } from 'react';


class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="header">
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="/" className="navbar-brand">Clients Viewer/Management</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}
 
export default HeaderComponent;