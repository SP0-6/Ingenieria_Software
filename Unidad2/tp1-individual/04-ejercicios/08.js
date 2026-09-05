function toPairs(arr){

    let resultado=[]
    for (i in arr){

        resultado[i]=[arr[i].id, arr[i]];
    }
    return resultado;
}