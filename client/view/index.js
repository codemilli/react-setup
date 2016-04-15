/**
 * Created by youngmoon on 4/15/16.
 */

import React from 'react';

/**
 * Define React Component Index
 */
class Index extends React.Component {

    /**
     * Constructor for Index
     * @constructs
     * @param {Index.propTypes} props
     */
    constructor(props) {
        super(props);
    }

    /**
     * Render Index.
     * @returns {ReactElement|XML}
     */
    render() {
        return (
            <div>
                { this.props.children }
            </div>
        );
    }
}

export default Index;