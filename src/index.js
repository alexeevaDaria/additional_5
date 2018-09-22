module.exports = function check(str, bracketsConfig) {

   var objArr = [];
   let counter = []; 
   for(let i=0; i< bracketsConfig.length; i++){
       if (bracketsConfig[i][0]==bracketsConfig[i][1]){counter.push(0);}
       
       else {counter.push(2);}
   }
   for(let i=0; i< str.length; i++){

       let y = () => {
           for(let j=0; j < bracketsConfig.length; j++){
               let x = bracketsConfig[j].indexOf(str[i]);
               if(x!=-1){
                   if (counter[j] == 1){
                       counter[j]--;
                       x=1;
                   } 
                   else if (counter[j] == 0) counter[j]++;
                   return [j,x];
               }
           }
       };
       let temp = y();

      if(temp[1]==0) objArr.push([ temp[0], i ]);
       if(temp[1]==1){

           let x = () => {
               let len = objArr.length;
               if(len==0) return false;
               if(objArr[len-1][0]==temp[0]) {
                   objArr.splice(len-1,1);
                   return true;
               }
               else return false;
           }
           let res = x();
           if(res==false) return false;
       } 
   }
   if(objArr.length!=0) return false;
   else return true;
 }