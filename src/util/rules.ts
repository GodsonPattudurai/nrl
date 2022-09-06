export const initialRules = () => [
    { index: 1, key: 'If SOMETHING_DROPDOWN then SOMETHING_DROPDOWN' , value: 'If something then something', selected: false , nestedObj: [
            { key: 'SOMETHING_OPTION_DROPDOWN is equal to SOMETHING_OPTION_DROPDOWN' , value: 'Something is equal to something'},
            { key: 'the text position of FIELD_DROPDOWN from TEXT to TEXT' , value: 'Text position of a field from position to position'},
        ]},
    { index: 2, key: 'SOMETHING_DROPDOWN' , value: 'Set to something', selected: false}
];

export const somethingDropdownRules = () => [
    { key: 'SOMETHING_OPTION_DROPDOWN is equal to SOMETHING_OPTION_DROPDOWN' , value: 'Something is equal to something'},
    { key: 'the text position of FIELD_DROPDOWN from TEXT to TEXT' , value: 'Text position of a field from position to position'},
    { key: 'SOMETHING_DROPDOWN' , value: 'Set to something'}
];

export const somethingOptionDropdownRules = () => [
    { key: 'FIELD_DROPDOWN' , value: 'Set to a field'},
    { key: 'TEXT' , value: 'Set to a some text'},
    { key: 'DATE' , value: 'Set to date'},
    { key: 'TIME' , value: 'Set to time'},
    { key: 'DATE_TIME' , value: 'Set to date/time'},
    { key: 'CHECKBOX' , value: 'Set to True or False'},
];

export const fieldDropdownValues = () => [
    { key: 'Field 1' , value: 'Field 1', title: 'Match Field'},
    { key: 'Field 2' , value: 'Field 2', title: 'Source 1'},
    { key: 'Field 3' , value: 'Field 3', title: 'Source 2'},
];
