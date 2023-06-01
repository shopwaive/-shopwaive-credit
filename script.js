const config = {
    headers: {
        "X-Shopwaive-Access-Token": "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6",
        "X-Shopwaive-Platform": "shopify",
        "Content-Type":"application/json"
    }
};

const Shopwaive = require('@shopwaive/credit');
const email = "support@shopwaive.com";


//***************************************************** GET CUSTOMER ****//
async function getCustomer() {
    return new Promise((resolve, reject) => {
        let data = Shopwaive.getCustomer(config, email);
        resolve(data)
    });
}

getCustomer().then(res => {
    let data = res.data;
    if (data) {
        console.log(res.data);
    }
    console.log(res.status)
    console.log(res.statusText)

})


//***************************************************** SET CUSTOMER ****//
const body_setCustomer = {
    customer_email: "support@shopwaive.com",
    balance: 600.01,
    note: "New balance reflects 3Q sales"
}

async function setCustomer() {

    return new Promise((resolve, reject) => {
        let data = Shopwaive.setCustomer(config, body_setCustomer);
        resolve(data)
    });
}

setCustomer().then(res => {
    let data = res.data;
    if (data) {
        console.log(res.data);
    }
    console.log(res.status)
    console.log(res.statusText)

})


//***************************************************** ADJUST CUSTOMER ****//
const body_adjustCustomer = {
    customer_email: "support@shopwaive.com",
    amount: 52.34,
    note: "Added $52.34 for good performance"
}

async function adjustCustomer() {

    return new Promise((resolve, reject) => {
        let data = Shopwaive.adjustCustomer(config, body_adjustCustomer);
        resolve(data)
    });
}

adjustCustomer().then(res => {
    let data = res.data;
    if (data) {
        console.log(res.data);
    }
    console.log(res.status)
    console.log(res.statusText)

})

//***************************************************** CREATE ORDER URL ****//

const body_createOrder = {
    customerid: 6659662610648,
    free_shipping: true,
    tags: "New customer, Store Credit, Marketing promo, Exclusive",
    order_notes: [{
        name: "Customer survey",
        value: "Customer successfully completed satisfaction survey"
    }],
    description: "Store Credit",
    amount: 22.22,
    cart: {
        items: [
            {
                quantity: "8",
                variant_id: "43723944231128",
                applied_discount: {
                    description: "Promo with Birthday offer",
                    value_type: "percentage",
                    value: "15",
                    title: "BIRTHDAY15"
                }
            }
        ]
    }
}

async function createOrderUrl() {

    return new Promise((resolve, reject) => {
        let data = Shopwaive.createOrderUrl(config, body_createOrder);
        resolve(data)
    });
}

createOrderUrl().then(res => {
    let data = res.data;
    if (data) {
        console.log(res.data);
    }
    console.log(res.status)
    console.log(res.statusText)

})

