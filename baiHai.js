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
    price: 101
  },
  {
    id:8,
    title:"Dau tu chung khoan",
    category: "kinh te",
    price: 99
  },
  {
    id:9,
    title:"Dau tu bat dong san",
    category: "kinh te",
    price: 1
  },
  {
    id:10,
    title:"Phap luat",
    category: "Chinh tri",
    price: 66
  }
  
];

const listObj=JSON.parse(listJson);
const list= listObj.products;
const template=list[0];





newProducts.forEach((item,index)=>{
  const newItem={...template};
  for(let [key, value] of Object.entries(item)){
    newItem[key]=value;
  }
  if(Array.isArray(list)){
    list.push(newItem)
  }
});
    

function listAllCategory(arr){
  let text='';
  if(Array.isArray(arr)){
    arr.forEach(item=>{
      if(!text.includes(item.category))
        text+=item.category+'\n';
    })
  }
  return text.length>0 ? text: "Category empty";
}
// tìm kiếm,lọc theo category
function searchProductByCategory(arr,category){
  const result=[];
  let text='';
  if(Array.isArray(arr)){
    arr.forEach(item=>{
      if(item.category === category){
        result.push(item);
      }
    });
    result.forEach(item=>{
      for( let [key,value] of Object.entries(item)){
        text+=key+ ':'+ value+ '\n';
      }
      text+='\n ---------------\n';
    });
  }
  return result.length>0? text: 'No product match category.';
}

//lọc các sản phẩm có giá dưới 100
function searchProductLessThan(arr,price){
  const result=[];
  let text='';
  if(Array.isArray(arr)){
    arr.forEach(item=>{
      if(item.price <= price){
        result.push(item);
      }
    });
    result.forEach(item=>{
      for( let [key,value] of Object.entries(item)){
        text+=key+ ':'+ value+ '\n';
      }
      text+='\n ---------------\n';
    });
  }
  return result.length>0? text: 'No product has price less than '+price +'.';
}
//tính tổng tiền của các sản phẩm có giá trên 100
function sumMoney(arr,price){
  const result=[];
  let text=0;
  if(Array.isArray(arr)){
    arr.forEach(item=>{
      if(item.price > price){
        result.push(item);
      }
    });
    result.forEach(item=>{
      text+=item.price/1;
    });
    text+='$';
  }
  return result.length>0? text: 'No product has price less than '+price +'.';
}

//sắp xếp sản phẩm theo giá, theo tên (tăng dần, giảm dần)
function sortProcduct(arr,direction,prop){
  const result=[...arr]
  let text='';
  if(Array.isArray(arr)){
    result.sort((a,b)=>{
      direction= direction=== 'asc'? a[prop]-b[prop] : b[prop]-a[prop];
      if(isNaN(direction)){
        if(a[prop]>b[prop] ) direction=1;
        else if(a[prop]<b[prop] ) direction=-1;
        else direction=0;
      }
      return direction;
    });
    result.forEach(item=>{
      for( let [key,value] of Object.entries(item)){
        text+=key+ ':'+ value+ '\n';
      }
      text+='\n ---------------\n';
    });
  }
  return result.length>0? text: 'Something went wrong!';
}

listAllCategory(list);
searchProductByCategory(list,'giao duc');
searchProductLessThan(list,100);
sumMoney(list,90);
sortProcduct(list,'des','title');
const result=document.getElementById('demo')  
result.innerText= sortProcduct(list,'desc','title');








