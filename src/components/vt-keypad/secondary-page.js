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
                    <div />
                    <div />
                </KeyboardRow>

                <KeyboardRow rows={6}>
                    <TouchableKeypadButton keyConfig={KeyConfigs.LOG} />
                    <TouchableKeypadButton keyConfig={KeyConfigs.LOG_N} />
                    <TouchableKeypadButton keyConfig={KeyConfigs.LN} />
                    <div />
                    <div />
                    <TouchableKeypadButton keyConfig={KeyConfigs.BACKSPACE} />
                </KeyboardRow>

                <KeyboardRow rows={6}>
                    <ManyKeypadButton keys={[Keys.LT, Keys.LEQ]} />
                    <ManyKeypadButton keys={[Keys.GT, Keys.GEQ]} />
                    <div />
                    <div />
                    <div />
                    <TouchableKeypadButton keyConfig={dismissOrJumpOutKey} />
                </KeyboardRow>
            </KeyboardWrapper>
        );
    }
}

module.exports = SecondaryPage;
