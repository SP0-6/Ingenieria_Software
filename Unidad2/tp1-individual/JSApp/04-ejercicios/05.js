function getMenorMayor(arr){

    let mayor=arr[0];
    let menor=arr[0];

    for (n of arr){
        if (n<menor){
            menor=n;
        }
        if (n>mayor){
            mayor=n;
        }
    }
    return [menor, mayor];
}