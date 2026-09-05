function crearArray(n){

    if (n>=0){

        let resultado=[];

        for(let i=1; i<=n; i++){
            resultado[i-1]=i;
        }

        return resultado;
    } else return "tamaño inválido"
}