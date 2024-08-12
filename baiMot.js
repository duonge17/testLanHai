function parseStringToObject(str){
            
    //input:{name:abc,size:{width:abc,height:23},xyz:abc,price:23,list:[a,11,23]}
    //output:name:abc \nsize:{width:abc,height:23}\n xyz:abc \n price:23 \nlist:[a,11,23]
    function fromStringToPropsLine(para){
        const result=[];
        for(let i=0;i<para.length;i++){
            let prop='';
            let condition=false;
            let sign=false;

            while(i< para.length && condition===false){
                prop=prop+para[i];
                i=i+1;
                if(para[i]==='['){
                    sign=true;
                    while(i<para.length && sign ===true){
                        prop=prop+para[i];
                        i=i+1;
                        sign=prop.endsWith(']')? false: true;    
                    }
                }
                else if(para[i]==='{'){
                    sign=true;
                    while(i<para.length && sign ===true){
                        prop=prop+para[i];
                        i=i+1;
                        sign=prop.endsWith('}')? false: true;    
                    }
                }

                if(para[i]===',' && sign===false){
                    condition=true;
                }
            }
            result.push(prop);
        }    
        return result;
    }
    //input [a,11,12]
    //output ["a",11,12]
    function executeArrayValue(para){
        let strArr=Array.from(para);
        strArr.pop();
        strArr.shift();
        strArr=strArr.join('').split(',');
        console.log(strArr)
        const newArr= strArr.map((item)=>{
            item=isNaN(item)? ('"'+item+'"'): item;
            
            return item;
        })
        return '['+newArr.join(',')+']';
    }
    //input :name:abc \nsize:{width:abc,height:23}\n xyz:abc \n price:23 \nlist:[a,11,23]
    //output: "name":abc \n"size":{"width":"abc","height":23}\n "xyz":"abc" \n "price":23 \n "list":["a",11,23]
    function executePropsLine(pairOfPara){
        const result=[];
        
        for(let item of pairOfPara){
            let key='';
            let prop='';
            for(let i=0;i<item.length;i++){
                
                while(i<item.length ){
                    if(item[i]===' ') continue;
                    key+=item[i];
                    i=i+1;
                    
                    if(item[i]===":") break;

                }
                prop+='"'+key+'"'+":";
                key='';
                i=i+1;
                while(i<item.length){
                    if(item[i]==='') continue;
                    key+=item[i];
                    i=i+1;
                }
                if(key.startsWith('{')){
                    key=parseStringToObject(key);
                   
                }
                else if(key.startsWith('[')){
                    key=executeArrayValue(key);
                    console.log(key)
                }
                else if(isNaN(key)){
                    key='"'+key+'"';
                }
                else{
                    key=key;
                }
                prop+=key;
                result.push(prop);
            }
        }
        return result;
    }

    const toArray=Array.from(str);
    toArray.pop();
    toArray.shift();
    let stringProps=toArray.join('');
    const result=fromStringToPropsLine(stringProps);
    let strResult=executePropsLine(result);
    return '{'+strResult+'}';

}
const result=document.getElementById('demo')  
result.innerText=parseStringToObject("{name:abc,size:{width:abc,height:23},xyz:abc,price:23,list:[a,11,23]}");