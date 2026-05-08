



function Ques1(){


//Loyalty points calculator

    function loyaltypntCalc(tier,totalSpend){

     let points=0;

     if(totalSpend>=100){
        if(tier==="gold"){
             points=(totalSpend/100)*10;

             if(totalSpend>500){
                points=points+50;
             }
             return points;
        }else if(tier==="silver"){
             points=(totalSpend/100)*5;

             if(totalSpend>500){
                points=points+20;
             }
              return points;
        }else if(tier==="regular"){
             points=(totalSpend/100)*2;
              return points;
        }
    }else{
        return points;
    }

    }

let point=loyaltypntCalc("gold",800);

console.log(point+" points");
   


    return(
        <div style={{color:"white"}}>
          <h1>Loyalty points calculator</h1>
        </div>
    )
}

export default Ques1;