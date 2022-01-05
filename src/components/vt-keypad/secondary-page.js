const React = require("react");
const {View} = require("@khanacademy/wonder-blocks-core");
const Color = require("@khanacademy/wonder-blocks-color");

const KeyConfigs = require("../../data/key-configs");
const Keys = require("../../data/keys");

const TouchableKeypadButton = require("../touchable-keypad-button");
const ManyKeypadButton = require("../many-keypad-button");
const KeyboardWrapper = require("./keyboard-wrapper");
const KeyboardRow = require("./keyboard-row");
const { PlaceHolderButton, SecondaryKeypadButton } = require("../keypad/keypad-page-items");

class SecondaryPage extends React.Component {
    render() {
        const {dismissOrJumpOutKey} = this.props;
        return (
            <KeyboardWrapper>
                <KeyboardRow rows={6}>
                    <TouchableKeypadButton keyConfig={KeyConfigs.ALPHA} />
                    <TouchableKeypadButton keyConfig={KeyConfigs.BETA} />
                    <TouchableKeypadButton keyConfig={KeyConfigs.GAMMA} />
                    <TouchableKeypadButton keyConfig={KeyConfigs.ABS} />
                    <TouchableKeypadButton keyConfig={KeyConfigs.PI} />
                    <TouchableKeypadButton keyConfig={KeyConfigs.DEGREE} />
                </KeyboardRow>

                <KeyboardRow rows={6}>
                    <TouchableKeypadButton keyConfig={KeyConfigs.SIN} />
                    <TouchableKeypadButton keyConfig={KeyConfigs.COS} />
                    <TouchableKeypadButton keyConfig={KeyConfigs.TAN} />
                    <TouchableKeypadButton keyConfig={KeyConfigs.CTG} />
                    <TouchableKeypadButton keyConfig={KeyConfigs.TILDE} />
                    <TouchableKeypadButton keyConfig={KeyConfigs.INFTY} />
                </KeyboardRow>

                <KeyboardRow rows={6}>
                    <ManyKeypadButton keys={[Keys.LOG_N, Keys.LOG, Keys.LN]} />
                    <TouchableKeypadButton keyConfig={KeyConfigs.SET_INTERSECTION} />
                    <TouchableKeypadButton keyConfig={KeyConfigs.SET_UNION} />
                    <TouchableKeypadButton keyConfig={KeyConfigs.SET_MINUS} />
                    <TouchableKeypadButton keyConfig={KeyConfigs.SET_EMPTY} />
                    <TouchableKeypadButton keyConfig={KeyConfigs.BACKSPACE} />
                </KeyboardRow>

                <KeyboardRow rows={6}>
                    <ManyKeypadButton keys={[Keys.LT, Keys.LEQ]} />
                    <ManyKeypadButton keys={[Keys.GT, Keys.GEQ]} />
                    <ManyKeypadButton keys={[Keys.SET_MEMBER, Keys.SET_NOT_MEMBER]} />
                    <TouchableKeypadButton keyConfig={KeyConfigs.LOGIC_CONJUNCTION} />
                    <TouchableKeypadButton keyConfig={KeyConfigs.LOGIC_ALTERNATIVE} />
                    <TouchableKeypadButton keyConfig={dismissOrJumpOutKey} />
                </KeyboardRow>
            </KeyboardWrapper>
        );
    }
}

module.exports = SecondaryPage;
