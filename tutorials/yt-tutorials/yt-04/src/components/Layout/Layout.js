import React, {Component} from 'react';
import Config from './Config';

class Layout extends Component {
    constructor(props) {
        super(props);

        let arrayId = [];
        if(Config.length > 0) {
            for(let i = 0; i < Config.length; i++) {
                if(arrayId.indexOf(Config[i].id) === -1) {
                    arrayId.push(Config[i].id);
                }
            }
        }

        this.state = {
            config: Config,
            nodeName: ''
        }
    }
    showConfig = (Config) => {
        var out = "";
        var i;
        for (i = 0; i < Config.length; i++) {
            out += '<a href="' + Config[i].id + '">' + Config[i].name + '</a><br>';
        }
    }

    render() {
        return (
            <div> {
                this.showConfig()
            } </div>
        );
    };
}

export default Layout;
