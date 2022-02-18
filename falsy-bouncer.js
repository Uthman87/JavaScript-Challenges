function bouncer(arr) {
    let truthy = [];
    for(let i = 0; i < arr.length; i++) {
      if(Boolean(arr[i]) === true) {
        truthy.push(arr[i]);
      }
    }
        return truthy;
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));