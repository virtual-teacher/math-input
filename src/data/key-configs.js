/**
 * @flow
 * This file contains configuration settings for the buttons in the keypad.
 */

const Keys = require("../data/keys");
const {
    DecimalSeparators,
    DivSeparators,
    IconTypes,
    KeyTypes,
} = require("../consts");
const {decimalSeparator, divSeparator} = require("../utils");
const i18n = window.i18n || {_: (s) => s};

export type KeyConfig = {
    id: string,
    type: string,
    ariaLabel: string,
};
const KeyConfigs: Object = {
    // Basic math keys.
    [Keys.PLUS]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a plus sign.
        ariaLabel: i18n._("Plus"),
    },
    [Keys.MINUS]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a minus sign.
        ariaLabel: i18n._("Minus"),
    },
    [Keys.NEGATIVE]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a minus sign.
        ariaLabel: i18n._("Negative"),
    },
    [Keys.TIMES]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a multiplication sign (represented with an 'x').
        ariaLabel: i18n._("Multiply"),
    },
    [Keys.DIVIDE]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a division sign.
        ariaLabel: i18n._("Divide"),
        icon:
            divSeparator === DivSeparators.CUSTOM
                ? {
                      // TODO(charlie): Get an SVG icon for the comma, or verify with
                      // design that the text-rendered version is acceptable.
                      type: IconTypes.TEXT,
                      data: ":",
                  }
                : {
                      type: IconTypes.SVG,
                      data: Keys.DIVIDE,
                  },
    },
    [Keys.DECIMAL]: {
        type: KeyTypes.VALUE,
        // I18N: A label for a decimal symbol.
        ariaLabel: i18n._("Decimal"),
        icon:
            decimalSeparator === DecimalSeparators.COMMA
                ? {
                      // TODO(charlie): Get an SVG icon for the comma, or verify with
                      // design that the text-rendered version is acceptable.
                      type: IconTypes.TEXT,
                      data: ",",
                  }
                : {
                      type: IconTypes.SVG,
                      data: Keys.PERIOD,
                  },
    },
    [Keys.PERCENT]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a percent sign.
        ariaLabel: i18n._("Percent"),
    },
    [Keys.CDOT]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a multiplication sign (represented as a dot).
        ariaLabel: i18n._("Multiply"),
    },
    [Keys.EQUAL]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._("Equals sign"),
    },
    [Keys.NEQ]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._("Not-equals sign"),
    },
    [Keys.GT]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a 'greater than' sign (represented as '>').
        ariaLabel: i18n._("Greater than sign"),
    },
    [Keys.LT]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a 'less than' sign (represented as '<').
        ariaLabel: i18n._("Less than sign"),
    },
    [Keys.GEQ]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._("Greater than or equal to sign"),
    },
    [Keys.LEQ]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._("Less than or equal to sign"),
    },
    // mobile native
    [Keys.FRAC_INCLUSIVE]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a button that creates a new fraction and puts the
        // current expression in the numerator of that fraction.
        ariaLabel: i18n._("Fraction, with current expression in numerator"),
    },
    // mobile native
    [Keys.FRAC_EXCLUSIVE]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a button that creates a new fraction next to the
        // cursor.
        ariaLabel: i18n._("Fraction, excluding the current expression"),
    },
    // mobile web
    [Keys.FRAC]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a button that creates a new fraction next to the
        // cursor.
        ariaLabel: i18n._("Fraction, excluding the current expression"),
    },
    [Keys.EXP]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a button that will allow the user to input a custom
        // exponent.
        ariaLabel: i18n._("Custom exponent"),
    },
    [Keys.EXP_2]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a button that will square (take to the second
        // power) some math.
        ariaLabel: i18n._("Square"),
    },
    [Keys.EXP_3]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a button that will cube (take to the third power)
        // some math.
        ariaLabel: i18n._("Cube"),
    },
    [Keys.SQRT]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._("Square root"),
    },
    [Keys.CUBE_ROOT]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._("Cube root"),
    },
    [Keys.RADICAL]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._("Radical with custom root"),
    },
    [Keys.LEFT_PAREN]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._("Left parenthesis"),
    },
    [Keys.RIGHT_PAREN]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._("Right parenthesis"),
    },
    [Keys.LN]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._("Natural logarithm"),
    },
    [Keys.LOG]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._("Logarithm with base 10"),
    },
    [Keys.LOG_N]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._("Logarithm with custom base"),
    },
    [Keys.SIN]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._("Sine"),
    },
    [Keys.COS]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._("Cosine"),
    },
    [Keys.TAN]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._("Tangent"),
    },
    [Keys.CTG]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._("Cotangent"),
    },
    [Keys.ANGLE]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._("Angle"),
        icon: {
            type: IconTypes.MATH,
            data: "\\sphericalangle",
        },
    },
    [Keys.ABS]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._("Absolute"),
        icon: {
            type: IconTypes.MATH,
            data: "| {x} |",
        },
    },
    [Keys.PI]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._("Pi"),
        icon: {
            type: IconTypes.MATH,
            data: "\\pi",
        },
    },
    [Keys.ALPHA]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._("Alpha"),
        icon: {
            type: IconTypes.MATH,
            data: "\\alpha",
        },
    },
    [Keys.BETA]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._("Beta"),
        icon: {
            type: IconTypes.MATH,
            data: "\\beta",
        },
    },
    [Keys.GAMMA]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._("Gamma"),
        icon: {
            type: IconTypes.MATH,
            data: "\\gamma",
        },
    },
    [Keys.DELTA]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._("Delta"),
        icon: {
            type: IconTypes.MATH,
            data: "\\Delta",
        },
    },
    [Keys.DEGREE]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._("Degree"),
        icon: {
            type: IconTypes.MATH,
            data: "\\degree",
        },
    },
    [Keys.THETA]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._("Theta"),
        icon: {
            type: IconTypes.MATH,
            data: "\\theta",
        },
    },
    [Keys.NOOP]: {
        type: KeyTypes.EMPTY,
    },

    // Input navigation keys.
    [Keys.UP]: {
        type: KeyTypes.INPUT_NAVIGATION,
        ariaLabel: i18n._("Up arrow"),
    },
    [Keys.RIGHT]: {
        type: KeyTypes.INPUT_NAVIGATION,
        ariaLabel: i18n._("Right arrow"),
    },
    [Keys.DOWN]: {
        type: KeyTypes.INPUT_NAVIGATION,
        ariaLabel: i18n._("Down arrow"),
    },
    [Keys.LEFT]: {
        type: KeyTypes.INPUT_NAVIGATION,
        ariaLabel: i18n._("Left arrow"),
    },
    [Keys.JUMP_OUT_PARENTHESES]: {
        type: KeyTypes.INPUT_NAVIGATION,
        ariaLabel: i18n._("Navigate right out of a set of parentheses"),
    },
    [Keys.JUMP_OUT_EXPONENT]: {
        type: KeyTypes.INPUT_NAVIGATION,
        ariaLabel: i18n._("Navigate right out of an exponent"),
    },
    [Keys.JUMP_OUT_BASE]: {
        type: KeyTypes.INPUT_NAVIGATION,
        ariaLabel: i18n._("Navigate right out of a base"),
    },
    [Keys.JUMP_INTO_NUMERATOR]: {
        type: KeyTypes.INPUT_NAVIGATION,
        ariaLabel: i18n._("Navigate right into the numerator of a fraction"),
    },
    [Keys.JUMP_OUT_NUMERATOR]: {
        type: KeyTypes.INPUT_NAVIGATION,
        ariaLabel: i18n._(
            "Navigate right out of the numerator and into the denominator",
        ),
    },
    [Keys.JUMP_OUT_DENOMINATOR]: {
        type: KeyTypes.INPUT_NAVIGATION,
        ariaLabel: i18n._(
            "Navigate right out of the denominator of a fraction",
        ),
    },
    [Keys.BACKSPACE]: {
        type: KeyTypes.INPUT_NAVIGATION,
        // I18N: A label for a button that will delete some input.
        ariaLabel: i18n._("Delete"),
    },

    // Keypad navigation keys.
    [Keys.DISMISS]: {
        type: KeyTypes.KEYPAD_NAVIGATION,
        // I18N: A label for a button that will dismiss/hide a keypad.
        ariaLabel: i18n._("Dismiss"),
    },
    [Keys.TILDE]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._("Tilde"),
        icon: {
            type: IconTypes.MATH,
            data: "\\sim",
        }
    },
    [Keys.INFTY]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._("Infinity"),
        icon: {
            type: IconTypes.MATH,
            data: "\\infty",
        }
    },
    [Keys.SET_UNION]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._("Union"),
        icon: {
            type: IconTypes.MATH,
            data: "\\cup",
        }
    },
    [Keys.SET_INTERSECTION]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._("Intersection"),
        icon: {
            type: IconTypes.MATH,
            data: "\\cap",
        }
    },
    [Keys.SET_MINUS]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._("Minus"),
        icon: {
            type: IconTypes.MATH,
            data: "\\setminus",
        }
    },
    [Keys.SET_EMPTY]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._("Empty set"),
        icon: {
            type: IconTypes.MATH,
            data: "\\emptyset",
        }
    },
    [Keys.SET_MEMBER]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._("Set member"),
        icon: {
            type: IconTypes.MATH,
            data: "\\in",
        }
    },
    [Keys.SET_NOT_MEMBER]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._("Set not member"),
        icon: {
            type: IconTypes.MATH,
            data: "\\notin",
        }
    },
    [Keys.LOGIC_CONJUNCTION]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._("Conjunction"),
        icon: {
            type: IconTypes.MATH,
            data: "\\wedge",
        }
    },
    [Keys.LOGIC_ALTERNATIVE]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._("Alternative"),
        icon: {
            type: IconTypes.MATH,
            data: "\\vee",
        }
    },
    [Keys.L_ANGLE]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._("LAngle"),
        icon: {
            type: IconTypes.MATH,
            data: "\\langle",
        }
    },
    [Keys.R_ANGLE]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._("RAngle"),
        icon: {
            type: IconTypes.MATH,
            data: "\\rangle",
        }
    },
};

// Add in any multi-function buttons. By default, these keys will mix in any
// configuration settings from their default child key (i.e., the first key in
// the `childKeyIds` array).
// TODO(charlie): Make the multi-function button's long-press interaction
// accessible.
// NOTE(kevinb): This is only used in the mobile native app.
KeyConfigs[Keys.FRAC_MULTI] = {
    childKeyIds: [Keys.FRAC_INCLUSIVE, Keys.FRAC_EXCLUSIVE],
};

// TODO(charlie): Use the numeral color for the 'Many' key.
KeyConfigs[Keys.MANY] = {
    type: KeyTypes.MANY,
    // childKeyIds will be configured by the client.
};

// Add in every numeral.
const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const num of NUMBERS) {
    // TODO(charlie): Consider removing the SVG icons that we have for the
    // numeral keys. They can be rendered just as easily with text (though that
    // would mean that we'd be using text beyond the variable key).
    const textRepresentation = `${num}`;
    KeyConfigs[`NUM_${num}`] = {
        type: KeyTypes.VALUE,
        ariaLabel: textRepresentation,
        icon: {
            type: IconTypes.TEXT,
            data: textRepresentation,
        },
    };
}

// Add in every variable.
const LETTERS = [
    "A",
    "Ą",
    "B",
    "C",
    "Ć",
    "D",
    "E",
    "Ę",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "Ł",
    "M",
    "N",
    "Ń",
    "O",
    "Ó",
    "P",
    "Q",
    "R",
    "S",
    "Ś",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "Ź",
    "Ż",
];
for (const letter of LETTERS) {
    const lowerCaseVariable = letter.toLowerCase();
    const upperCaseVariable = letter.toUpperCase();

    for (const textRepresentation of [lowerCaseVariable, upperCaseVariable]) {
        KeyConfigs[textRepresentation] = {
            type: KeyTypes.VALUE,
            ariaLabel: textRepresentation,
            icon: {
                type: IconTypes.TEXT,
                data: textRepresentation,
            },
        };
    }
}

for (const key of Object.keys(KeyConfigs)) {
    KeyConfigs[key] = {
        id: key,
        // Default to an SVG icon indexed by the key name.
        icon: {
            type: IconTypes.SVG,
            data: key,
        },
        ...KeyConfigs[key],
    };
}

module.exports = KeyConfigs;
