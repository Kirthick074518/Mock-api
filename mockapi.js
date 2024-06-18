// fetch("https://666a7a607013419182cf6be1.mockapi.io/customers").then(data=>data.json()).then(res=>console.log(res)).catch(err=>console.log(err))

//get--fet
//post
//put
//delete


const addBtn=document.querySelector('#addBtn')
const listBtn=document.querySelector('#listBtn')
const updateBtn=document.querySelector('#updateBtn')

var customerContainer=document.querySelector('.customer-container')
var customers=[]
var Cname = document.querySelector('.Cname');
var pic = document.querySelector('.pic');
var id;
// const newCustomer=[]

addBtn.addEventListener('click',async()=>
{
const newCustomer={name:Cname.value,profilepic:pic.value};
const response = await fetch("https://666a7a607013419182cf6be1.mockapi.io/customers", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCustomer)
})
console.log(response);
})

listBtn.addEventListener('click',listCustomers)
async function listCustomers()
{
      const data=await fetch("https://666a7a607013419182cf6be1.mockapi.io/customers")
      customers=await data.json()
      console.log(customers);
      let card=""
      customers.map(customer=>{
       card+=`<div class='card'><img src=${customer.profilepic}><h3>${customer.name}<span class="bi bi-trash3" onclick="delCustomer(${customer.id})"></span><span class="bi bi-pencil" onclick="setData(${customer.id})"></span></h3></div>`
   customerContainer.innerHTML=card
})
      
}
function delCustomer(cid)
{
   fetch(`https://666a7a607013419182cf6be1.mockapi.io/customers/${cid}`, {
           method: "DELETE"}).then(()=>listCustomers())
      
}
//delete
// fetch("https://666a7a607013419182cf6be1.mockapi.io/customers/${id}", {
//     method: "DELETE"})

async function setData(cid)
{
var data=await fetch(`https://666a7a607013419182cf6be1.mockapi.io/customers/${cid}`)
var customer=await data.json()
// console.log(customer);
Cname.value=customer.name
pic.value=customer.profilepic
id=customer.id
}

updateBtn.addEventListener('click',async()=>{
  const updateCustomer={name:Cname.value,profilepic:pic.value};
const response = await fetch(`https://666a7a607013419182cf6be1.mockapi.io/customers/${id}`, {
    method: "PUT", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateCustomer)
})
console.log(response);
listCustomers()
})
//update
// const response = await fetch("https://666a7a607013419182cf6be1.mockapi.io/customers/${id}", {
//     method: "PUT", // or 'PUT'
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(customers)
// })