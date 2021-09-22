const React = require("react");

const {StyleSheet} = require("aphrodite");
const {View} = require("@khanacademy/wonder-blocks-core");
const Color = require("@khanacademy/wonder-blocks-color");
const Clickable = require("@khanacademy/wonder-blocks-clickable");

const Tabbar = require("../tabbar/tabbar");
const PrimaryPage = require("./primary-page");
const Secondary = require("./secondary-page");
const Tertiary = require("./tertiary-page");

class VTKeypadWrapper extends React.Component {
    state = {
        selectedPage: "Numbers",
    };
    render() {
        const {selectedPage} = this.state;
        const {dismissOrJumpOutKey} = this.props;

        const availablePages = ["Numbers", "Operators", "Geometry"];
        return (
            <View>
                <Tabbar
                    items={availablePages}
                    onSelect={(tabbarItem) => {
                        this.setState({selectedPage: tabbarItem});
                    }}
                />
                {selectedPage === "Numbers" && (
                    <PrimaryPage dismissOrJumpOutKey={dismissOrJumpOutKey} />
                )}
                {selectedPage === "Operators" && (
                    <Secondary dismissOrJumpOutKey={dismissOrJumpOutKey} />
                )}
                {selectedPage === "Geometry" && (
                    <Tertiary dismissOrJumpOutKey={dismissOrJumpOutKey} />
                )}
            </View>
        );
    }
}

module.exports = VTKeypadWrapper;
