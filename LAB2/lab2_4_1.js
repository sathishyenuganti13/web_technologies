let arr =[]

function read_array(){
    let n = prompt(" enter no of numbers :  ");
    
    for (let i=0 ; i<n ;i++){
        arr[i] = prompt(" enter a number : ");
    }
    document.getElementById("demo1").innerHTML="array before sorting : <br>["+arr+"]<br>";
}

function bubble_sort(){
    for(let i=0; i<arr.length-1 ; i++){
        for (let j = 0 ; j<arr.length-i-1 ;j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp ;
            }
        }
    }
    document.getElementById("demo2").innerHTML="array after sorting : <br>["+arr+"]<br>";
}