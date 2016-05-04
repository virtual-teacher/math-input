/**
 * An autogenerated component that renders the TOGGLE_SIGN iconograpy in SVG.
 *
 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
 */
const React = require('react');

const ToggleSign = React.createClass({
    propTypes: {
        primaryColor: React.PropTypes.string,
        secondaryColor: React.PropTypes.string,
    },

    getDefaultProps() {
        return {
            primaryColor: '#3B3E40',
            secondaryColor: '#BABEC2',
        };
    },

    render() {
        return <svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1">
            <g id="Math-Input" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="[Assets]-Math-Input" transform="translate(-1748.000000, -298.000000)">
                    <g id="math_keypad_icon_negate" transform="translate(1748.000000, 298.000000)">
                        <rect id="bounds" fillOpacity="0" fill="#FF0088" x="0" y="0" width="48" height="48"></rect>
                        <g id="icon" strokeWidth="1" transform="translate(12.000000, 12.000000)">
                            <rect id="bounds" fillOpacity="0" fill="#FF0088" x="0" y="0" width="24" height="24"></rect>
                            <g id="subtract" transform="translate(15.000000, 15.000000)" stroke={this.props.primaryColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M0,1 L8,1" id="line"></path>
                            </g>
                            <path d="M16,4 L8,20" id="line" stroke={this.props.primaryColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <g id="add" transform="translate(1.000000, 4.000000)" stroke={this.props.primaryColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M0,4 L8,4" id="line"></path>
                                <path d="M4,0 L4,8" id="line"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>;
    },
});

module.exports = ToggleSign;
