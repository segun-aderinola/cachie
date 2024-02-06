// Define an in-memory cache to store search queries using Map
const data = new Map();

module.exports = {
  addQueryString: async function (queryString) {

    const words = queryString.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
      for (let j = i + 1; j <= words.length; j++) {
        const combination = words.slice(i, j).join(" ");
        const count = data.get(combination) || 0;
        data.set(combination, count + 1);
      }
    }
  },
  searchString: async function (queryString) {
      
    const tokens = queryString.split(',');
    
    const processStart = performance.now();
    const results = {};
    
    console.log(data)

    for(const token of tokens){

      const count = data.get(token.trim().toLowerCase()) || 0;
      results[token] = count;
      console.log(token);
    }
    
  
      // calculate the completion time
    const processEnd = performance.now();
    let time = (processEnd - processStart).toFixed(2);
    time = `${time}ms`;
  
    return { results, time };
}
}