function cuantosPositivos(arr){

    let positivos=0;
    for(n of arr){
        if (n>0){
            positivos++;
        }
    }
    return positivos;
}