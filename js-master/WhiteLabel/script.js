const ids = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

function fetchById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) { // 20% chance to simulate failure
        reject(`Error fetching ID: ${id}`);
      } else {
        console.log(`Fetched for ID: ${id}`);
        resolve(`Response for ID: ${id}`);
      }
    }, Math.random() * 1000); // Simulate network latency
  });
}

async function fetchAllByIds(ids, batchSize){
  const result = [];
  let i=0;
  while(i<ids.length){
    const batch = ids.slice(i, i+batchSize);
    const batchPromise = batch.map(id => fetchById(id));
    const batchResult = await Promise.allSettled(batchPromise)

    console.log(batchResult);
    i=i+batchSize
  }
}

fetchAllByIds(ids, 3).then((res)=>{
  console.log(res);
})