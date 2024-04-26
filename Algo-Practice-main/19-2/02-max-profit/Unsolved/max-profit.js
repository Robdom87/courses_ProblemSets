// Write a function that takes an array of integers representing the price of a stock on different days.
// Return the maximum profit that can be made from buying and selling a single stock.

// TODO: Complete the function below:
//find min and max, and return difference

var maxProfit = function (prices) {
    // let highest = 0;
    // let lowest = -1;
    // for (let i = 0; i < prices.length - 1; i++) {
    //     if (prices[i] < prices[i + 1]) {
    //         if (lowest > prices[i]) {
    //             lowest = prices[i];
    //         }
    //         if (lowest === -1) {
    //             lowest = prices[i];
    //         }
    //         if (highest < prices[i + 1]) {
    //             highest = prices[i + 1];
    //         }
    //     }
    // }
    // if(lowest===-1){
    //     return 0;
    // }
    // return highest-lowest;

    let smallest = Infinity;
    let bestProfit = 0;

    for (let price of prices){
        smallest = Math.min(smallest, price);
        bestProfit = Math.max(bestProfit, price-smallest);
    }
    return bestProfit;
};
