const listJson= `{
  "products": [
    {
      "id": 1,
      "title": "Essence Mascara Lash Princess",
      "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      "category": "beauty",
      "price": 9.99,
      "discountPercentage": 7.17,
      "rating": 4.94,
      "stock": 5,
      "tags": [
        "beauty",
        "mascara"
      ],
      "brand": "Essence",
      "sku": "RCH45Q1A",
      "weight": 2,
      "dimensions": {
        "width": 23.17,
        "height": 14.43,
        "depth": 28.01
      },
      "warrantyInformation": "1 month warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "Low Stock",
      "reviews": [
        {
          "rating": 2,
          "comment": "Very unhappy with my purchase!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "John Doe",
          "reviewerEmail": "john.doe@x.dummyjson.com"
        },
        {
          "rating": 2,
          "comment": "Not as described!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Nolan Gonzalez",
          "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Scarlett Wright",
          "reviewerEmail": "scarlett.wright@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 24 
    } 
  ]
 
}`;

const newProducts=[
  {
    id:2,
    title:"Day con lam giau",
    category: "self-help",
    price: 100.99
  },
  {
    id:3,
    title:"De nhat kiem tien",
    category: "self-help",
    price: 3,
  },
  {
    id:4,
    title:"Vat ly 11",
    category: "giao duc",
    price: 99
  },
  {
    id:5,
    title:"Hoa hoc 12",
    category: "giao duc",
    price: 100.99
  },
  {
    id:6,
    title:"Toan cao cap",
    category: "giao duc",
    price: 99
  },
  {
    id:7,
    title:"Dragon ball",
    category: "truyen tranh",
    price: 80
  },
  
];

const listObj=JSON.parse(listJson);
const list= listObj.products;


const template=list[0];


const result=document.getElementById('demo');


newProducts.forEach((item,index)=>{
  const newItem={...template};
  for(let [key, value] of Object.entries(item)){
    newItem[key]=value;
  }
  if(Array.isArray(list)){
    list.push(newItem)
    
  }
});

function searchProduct(arr, prop, value){
  const result=[];
  arr.forEach(item=>{
    if(item[prop]===value){
      result.push(item);
    }
  });
  return result;
}
console.log(searchProduct(list,"title","Dragon ball"));









