function toCollection(arr){

    let collection=[];

    for (i in arr){
        let obj=arr[i];
        collection[i]=obj[1];
        collection[i].id=obj[0];
    }

    return collection;
}