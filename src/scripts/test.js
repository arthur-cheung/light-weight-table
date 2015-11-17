var node = document.querySelector('.tableNode.jsTable');
var table = new LightWeightTable (node,
    // Definition
    [{id: 'column1', display: 'Column 1', type: 'string'}, {id: 'column2', display: 'Column 2', type: 'string'},{id: 'column3', display: 'Column 3', type: 'string'}],
    // Data
    [{column1: 'cat', column2: 'dog', column3: 'pineapple', column4: 'basketball'},
        {column1: 'bird', column2: 'hedgehog', column3: 'pineapple', column4: 'basketball'},
        {column1: 'lion', column2: 'rag', column3: 'pineapple', column4: 'basketball'},
        {column1: 'scissors', column2: 'rock', column3: 'paper', column4: 'dog'},
        {column1: 'cat', column2: 'dog', column3: 'pineapple', column4: 'basketball'}
//        {_singleColumnRow: '<div>dog<input type="text"/></div>', dog: 'name dog'}
    ],
    // Options
    {includeRadio: false}
);
