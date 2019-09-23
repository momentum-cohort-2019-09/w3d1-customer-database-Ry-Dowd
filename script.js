/* this is javascript*/

function customerToHtml(customer) {
    return `<div class="customer">
                <div class="headshot">
                    <img src="${customer.picture.large}" alt = "${customer.name}'s headshot">
                </div>
                <div class="customer-info">
                    <div class="name">
                        ${customer.name.first} ${customer.name.last}
                    </div>
                    <div class="email">
                        ${customer.email}
                    </div>
                    <div class="address">
                        <div>${customer.location.street}</div>
                        <div>${customer.location.city}, 
                        ${nameToAbbr(customer.location.state)} 
                        ${customer.location.postcode}</div>
                    </div>
                    <div class="history">
                        <div>DOB: ${moment(customer.dob).format("MMM D, YYYY")}</div>
                        <div>Customer since: ${moment(customer.registered).format("MMM D, YYYY")}</div>
                    </div>
                </div>
            </div>`
}

let database = customers.map(customer => customerToHtml(customer))
console.log(database.join("\n"))
let textContent = database.join("\n")
document.querySelector(".customers").innerHTML = textContent