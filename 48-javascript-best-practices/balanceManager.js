let balance = 0;

module.exports = 
{
    getBalance: function()
    { 
        return balance;
    },

    decreaseBalance: function(amount)
        {
            // This method decreases the balance of the vending machine. If the balance amount is not 
            // enough to cover the purchase, the method throws an error. 
            let errorMessage;
            if(!this.canAfford(amount)){
                errorMessage = 'Insufficient balance';
            }
            if(errorMessage){
                throw new Error(errorMessage);
            }
            balance -= amount;
        },
    
    increaseBalance: function(amount)
        {
            balance += amount;
        },
    
    canAfford: function(amount)
        {
            if(!this.isValidAmount(amount))
                errorMessage = "Invalid Input";
            
            if(errorMessage)
                throw new Error(errorMessage);
            
            return amount <= balance;
        },
};