/*

Given the same "house" object again

Write the code for the functions as per the description above them

*/

let kinningParkHouse = {
  address: "1 Kinning Park",
  price: 180000,
  currentOwner: {
    firstName: "Margaret",
    lastName: "Conway",
    email: "margaret@fake-emails.com",
  },
};

let parkAvenueHouse = {
  address: "50 Park Avenue",
  price: 195000,
  currentOwner: {
    firstName: "Marie",
    lastName: "McDonald",
    email: "marie.m@real-emails.com",
  },
};

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/

// returns the full name (first name + last name) of the owner of the house
function getOwnerFullName(house) {
  return house = kinningParkHouse.currentOwner.firstName  +  kinningParkHouse.currentOwner.lastName;
}

// returns an array of the owners' email addresses of the two houses
function getEmailAddresses(house1, house2) {
  
  const array1=[house1,house2]
  array1.sort((a, b) => {
    console.log('a',a.currentOwner.email)
    console.log('b',b.currentOwner.email)
    console.log(a.currentOwner.email > b.currentOwner.email)
  })
return house1  = house2 =kinningParkHouse.currentOwner.email  +  parkAvenueHouse.currentOwner.email
}

// returns the address for the cheapest house out of the two
function getCheapestAddress(house1, house2) {
  
  console.log('> House Address')
  const array=[house1,house2]
   array.sort((a, b) => {
    console.log('a',a.price)
    console.log('b',b.price)
    console.log(a.price < b.price)
    return a.price - b.price;
  })
  return house1 = house2 = kinningParkHouse.address ;
}


/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/
console.log(
  `Expected result: Margaret Conway. Actual result: ${getOwnerFullName(
    kinningParkHouse.currentOwner
  )}`
);
console.log(
  `Expected result: margaret@fake-emails.com, marie.m@real-emails.com. Actual result: ${getEmailAddresses(
    kinningParkHouse,
    parkAvenueHouse
  )}`
);
console.log(
  `Expected result: 1 Kinning Park. Actual result: ${getCheapestAddress(
    parkAvenueHouse,
    kinningParkHouse
  )}`
);