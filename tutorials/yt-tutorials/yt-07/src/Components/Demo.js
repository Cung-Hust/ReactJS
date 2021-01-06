import React, {Component} from 'react';

class Demo extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="hj-wrap verticals">
                        <div className="hj-vertical-split-div">Top
                            <label className="hj-vertical-split-label"/>
                        </div>
                        <div className="hj-vertical-split-div">Middle
                            <label className="hj-vertical-split-label"/>
                        </div>
                        <div className="hj-vertical-split-div">Bottom</div>
                        <div className="arrow"/>
                    </div>
                    <div className="hj-wrap">
                        <div className="hj-transverse-split-div">
                            Column 1
                            <label className="hj-transverse-split-label"/>
                        </div>
                        <div className="hj-transverse-split-div">Column 2
                            <label className="hj-transverse-split-label"/>
                        </div>
                        <div className="hj-transverse-split-div">Column 3
                            <label className="hj-transverse-split-label"/>
                        </div>
                        <div className="hj-transverse-split-div">Column 4
                            <label className="hj-transverse-split-label"/>
                        </div>
                        <div className="hj-transverse-split-div">Column 5
                        </div>
                        <div className="arrow"/>
                    </div>
                    <div className="hj-wrap">
                        <div className="hj-transverse-split-div">
                            Column
                            <label className="hj-transverse-split-label"/>
                        </div>
                        <div className="hj-transverse-split-div verticals">
                            <div className="hj-vertical-split-div">Row 1
                                <label className="hj-vertical-split-label"/>
                            </div>
                            <div className="hj-vertical-split-div">Row 2
                                <label className="hj-vertical-split-label"/>
                            </div>
                            <div className="hj-vertical-split-div">Row 3</div>
                        </div>
                        <div className="arrow"/>
                    </div>
                    <div className="hj-wrap">
                        <div className="hj-transverse-split-div">
                            Column
                            <label className="hj-transverse-split-label"/>
                        </div>
                        <div className="hj-transverse-split-div">
                            Column 2
                            <label className="hj-transverse-split-label"/>
                        </div>
                        <div className="hj-transverse-split-div verticals">
                            <div className="hj-vertical-split-div">
                                Row
                                <label className="hj-vertical-split-label"/>
                            </div>
                            <div className="hj-vertical-split-div">Row 2
                                <label className="hj-vertical-split-label"/>
                            </div>
                            <div className="hj-vertical-split-div">Row 3</div>
                        </div>
                        <div className="arrow"/>
                    </div>
                    <div className="hj-wrap">
                        <div className="hj-transverse-split-div">
                            Column
                            <label className="hj-transverse-split-label"/>
                        </div>
                        <div className="hj-transverse-split-div verticals">
                            <div className="hj-vertical-split-div">Row
                                <label className="hj-vertical-split-label"/>
                            </div>
                            <div className="hj-vertical-split-div">Row 2</div>
                        </div>
                        <div className="arrow"/>
                    </div>
                    <div className="hj-wrap">
                        <div className="hj-transverse-split-div verticals">
                            <div className="hj-vertical-split-div">Row
                                <label className="hj-vertical-split-label"/>
                            </div>
                            <div className="hj-vertical-split-div">Row 2</div>
                            <label className="hj-transverse-split-label"/>
                        </div>
                        <div className="hj-transverse-split-div">
                            Column
                        </div>
                        <div className="arrow"/>
                    </div>
                </div>

            </div>
        );
    }
}

export default Demo;
