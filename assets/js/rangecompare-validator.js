yii.validation.rangecompare = function (value, messages, options) {
    console.log(value, messages, options)

    if (options.skipOnEmpty && yii.validation.isEmpty(value)) {
        console.log('skipOnEmpty')
        return;
    }
    
    var compareValue, valid = true;
    if (options.compareAttribute === undefined) {
        compareValue = options.compareValue;
    } else {
        compareValue = $('#' + options.compareAttribute).val() - 0;
    }

    if(options.skipOnCompareAttributeEmpty && yii.validation.isEmpty(compareValue)){
        console.log('skipOnCompareAttributeEmpty', compareValue)
        return;
    }

    console.info(value, compareValue, messages, options);

    if (options.type === 'number') {
        value = parseFloat(value);
        compareValue = parseFloat(compareValue);
    }
    switch (options.operator) {
        case '==':
            valid = value == compareValue;
            break;
        case '===':
            valid = value === compareValue;
            break;
        case '!=':
            valid = value != compareValue;
            break;
        case '!==':
            valid = value !== compareValue;
            break;
        case '>':
            valid = value > compareValue;
            break;
        case '>=':
            console.log(value +'>='+ compareValue)
            valid = value >= compareValue;
            break;
        case '<':
            valid = value < compareValue;
            break;
        case '<=':
            console.log(value +'<='+ compareValue)
            valid = value <= compareValue;
            break;
        default:
            valid = false;
            break;
    }

    if (!valid) {
        console.log('invalid')
        yii.validation.addMessage(messages, options.message, value);
    } else{
        console.log('valid')
    }
};