function checkCashRegister(price, cash, cid) {

    // multiply everything by 100 to get rid of decimals
    
      const cashNominal = {
        'PENNY': 1,
        'NICKEL': 5,
        'DIME': 10,
        'QUARTER': 25,
        'ONE': 100,
        'FIVE': 500,
        'TEN': 1000,
        'TWENTY': 2000,
        'ONE HUNDRED': 10000
      }
    
      let nominalKeys = Object.keys(cashNominal);
      let change = (cash - price) * 100;
      let totalCash = 0;
      
      let final = []; // final result, will be displayed at the end
    
      for(let i=0; i<cid.length; i++){
        cid[i][1] = cid[i][1] * 100;
        totalCash += cid[i][1]; // total cash in drawer, all summed up
      }
      
      
      if(change > totalCash){
        // CASE 1: change is bigger than total cash in drawer, meaning we don't have enough money to return to the client
        return {status: "INSUFFICIENT_FUNDS", change: []};
    
      } else if(change === totalCash){
        //CASE 2: change is equal to total cash in drawer, meaning we won't have anything left in drawer after giving out the change
        return {status: "CLOSED", change: cid.map(item => [item[0], item[1]/100])}
      } else {
        //CASE 3: change is lower than totalCash (I used reversed for loop but could easily make it work by rewriting my object at the beginning to start from the highest nominal and also reversing the cid array)
          for(let i=nominalKeys.length - 1; i>=0; i--){
            let cashUsed = 0;
            while(change >= cashNominal[nominalKeys[i]] && cid[i][1] > 0){ // loop until lowest correct value is found and skip those that are no longer accessible (no more left in drawer)
            
              change -= cashNominal[nominalKeys[i]]; // subtract that value from the change
              
              cid[i][1] -= cashNominal[nominalKeys[i]]; // take that value away from the drawer
              cashUsed += cashNominal[nominalKeys[i]]/100; // add that value to a variable representing summed value number of a certain nominal
            }
            if(cashUsed > 0){ // push new array with nominal name and its value to the final array if the cashUsed variable has been taken account in the while loop
              final.push([nominalKeys[i], cashUsed]);
            }
            
          }
          // ADDITIONAL CASE: unable to give out the change as we don't have certain cash nominals, meaning the change would be either lower or higher but never equal to the exact value
          if(change > 0){
            return {status: "INSUFFICIENT_FUNDS", change: []};
          }
          return {status: "OPEN", change: final}
      }
      
      
      
    }
    
    console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));