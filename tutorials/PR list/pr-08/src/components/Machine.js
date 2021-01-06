import React from 'react';

import './Machine.css';

import Running from './States/Running';
import Stopped from './States/Stopped';
import PlannedStop from './States/PlannedStop';
import Disconnect from './States/Disconnect';

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time))
}

class Machine extends React.Component {
    render() {
        // const state = 3;
        var state = Math.floor(Math.random() * 4) + 1;
        return (
            <div className="machine">
                 {(() => {  

           switch (state) {

              case 1:

                  return (

                    <div className="Machine">
                        <Running />
                    </div>

                  )

              case 2:

                  return (

                    <div className="Machine">
                        <Stopped />
                    </div>

                  )

                case 3:

                  return (

                    <div className="Machine">
                        <PlannedStop />
                    </div>

                  )

              default:

                  return (

                    <div className="Machine">
                        <Disconnect />
                    </div>

                  )

           }

        })()}
            </div>
        )

        sleep(1000);

    }
}

export default Machine;