export const sortArrayById = arr => {
  for(let i = 0; i < arr.length; i++){
    let index = i;
    for(let j = i; j < arr.length; j++){
      if(arr[j].id < arr[index].id){
        index = j
      }
    }

    let item = arr[index];
    arr[index] = arr[i];
    arr[i] = item;
  }

  return arr;
}

export const modalStyles = {
  content:{
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
}
