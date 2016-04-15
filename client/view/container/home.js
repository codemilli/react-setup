/**
 * Created by youngmoon on 4/15/16.
 */

import React from 'react';

/**
 * Define React Component Home
 */
class Home extends React.Component {

    /**
     * Constructor for Home
     * @constructs
     * @param {Home.propTypes} props
     */
    constructor(props) {
        super(props);
    }

    /**
     * Render Home.
     * @returns {ReactElement|XML}
     */
    render() {
        return (
            <div>
                Home !
            </div>
        );
    }
}

/**
 * Define Properties' type for Home
 */
Home.propTypes = {
};

/**
 * Define Default Props of Home
 */
Home.defaultProps = {
};

export default Home;
