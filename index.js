var customerName = 'bob';
var bestCustomer;


function upperCaseCustomerName() {
        console.log(customerName.toUpperCase());
    }
    
upperCaseCustomerName();

function setBestCustomer() {
    bestCustomer = 'not bob';
}
 setBestCustomer();
 console.log(bestCustomer);


function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

overwriteBestCustomer();
console.log(bestCustomer);


const leastFavoriteCustomer = 'Lucy';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Tom';
    
}

changeLeastFavoriteCustomer();
console.log(leastFavoriteCustomer);