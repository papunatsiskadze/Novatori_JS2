//1 Task
let userIsloggedIn=true;
let videoIsCommentable=true;

const userCanComment=userIsloggedIn && videoIsCommentable;
console.log(userCanComment);





// //2 Task
// let userIsloggedIn=true;
// let userIsBlocked=false;

// const userCanPost=userIsloggedIn || userIsBlocked;
// console.log(userCanPost);





// //3 Task
// let balance=305;
// let userCartTotal=300;

// const paymentComplete=balance>=userCartTotal;
// console.log(paymentComplete);






// //4 Task
// let userIsAdmin=true;
// let userIsModerator=true;
// let userIsCommentAuthor=true;

// const userCanDelete=userIsAdmin || userIsModerator || userIsCommentAuthor;
// console.log(userCanDelete);






// //5 Task
// let presidentKey=true;
// let primeMinisterKey=false;
// let generalOfArmiesKey=true;
// let masterKey=true;

// const bombWillLaunch=(presidentKey && primeMinisterKey && generalOfArmiesKey) || masterKey;
// console.log(bombWillLaunch);






// //6 Task
// const userPinCode=8888;
// const curretntPinCode=8888;
// const newPinCode=5555;
// const retypeNewPinCode=5555;

// const pinChangeComplete=(userPinCode == curretntPinCode) && (newPinCode == retypeNewPinCode);
// console.log(pinChangeComplete);





// //7 Task
// let health=20;
// let lives=3;

// const gameOver=(health==0) && (lives==0);
// console.log(gameOver);





// //8 Task
// let capsuleCount=27;
// let capsulePrice=10;
// let userBalance=300;
// let creditCardStatus=userBalance>=capsuleCount*capsulePrice;

// const paymentComplete=creditCardStatus;
// console.log(paymentComplete);




// //9 Task
// let availableRooms=10;
// let roomPrice=800;
// let discount=((roomPrice*25)/100);
// let userBalance=1300;
// let userHasDiscount=true;
// let userRoomCount=1;

// const paymentComplete=((availableRooms>0)&&(userBalance>(roomPrice-discount)*userRoomCount)&&userHasDiscount) || (availableRooms>0)&&(userBalance>roomPrice*userRoomCount);
// console.log(paymentComplete);