// const expre = 'papayas';
const expre = 'banana';
switch (expre) {
    case 'oranges':
        console.log('oranges are 49RS');
        break;
        case 'mangoes':
        case 'papayas':
            console.log('mangoes and papayas are 45 Rs');
            break;
            default:
                console.log(`sorry we are out of ${expre}` );
}