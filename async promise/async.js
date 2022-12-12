console.log("person 1 shows ticket");
console.log("person 2 shows ticket");
async function preMovie() {
    const promiseWifeBringTicket = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Ticket");
        }, 3000);
    });
    const getPopcorn = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Popcorn");
        }, 2000);
    });
    const getButter = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Butter");
        }, 2000);
    });
    const getColdDrinks = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Cold Drink");
        }, 2000);
    });
    const ticket = await promiseWifeBringTicket;
     console.log(`got the ${ticket}`);
     console.log(`Husband:we should go in now`);
     console.log(`Wife: "i am hungry"`);
    const pop = await getPopcorn;
    console.log(`Husband: here is ${pop}`);
	console.log(`Husband:we should go in now`);
    console.log(`Wife: "I dont like popcorn without butter!"`);
    const butter = await getButter;
    console.log(`added ${butter}`);
    console.log(`Husband:Anything else darling`);
    console.log(`Wife: Cold drink?`);
    const cold = await getColdDrinks;
    console.log(`Husband: Here's your ${cold}`);
	console.log(`Wife: lets go we are going to miss the preivew`);
    console.log(`Husband: thanks for the reminder grin`);
  return ticket
}
preMovie().then((t)=>{console.log(`person 3 shows ${t}`);}).then(trip);
console.log('person 4 shows ticket');


async function trip(params) {
    console.log("2 months after......");
console.log("......")
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("buy car")
            resolve()
        }, 1000);
    })
    
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("let's go to manali")
            resolve()
        }, 1000);
    })
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("reached manali")
            resolve()
        }, 1000);
    })
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("reached mountain")
            resolve()
        }, 1000);
    })
}