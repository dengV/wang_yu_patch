// factorial , 阶乘



var factorial = function(n){
    if ( n < 0){
        return;
    }

    if( n == 0){
        return 1;
    }
    return n * factorial(n - 1);
    // 递归 调用， 一定要有 出口

}
