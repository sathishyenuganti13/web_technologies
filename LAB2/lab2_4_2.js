let ar = new(1,2,4,563,5,5,67,34,58,91)

function bin_search(ar , ele){
    low = 0;
    high = ar.length-1
    mid= Math.floor((low+high)/2)
    while(low < high){
        if (ar[mid] = ele) return true 

        else if(ele > ar[mid]) low = mid+1

        else high = mid - 1
    }
    return false
}

function get_element(ele){
    let ex = document.getElementById("demo") ;
    if (bin_search(ar,ex)) document.writeln(" element found ")
    else document.writeln(" element not found")
}



































let arr = new Array(1,2,3,4,5,6,7,8,9);

function binarySearch(arr, ele)
{
    let low = 0;
    let high = arr.length - 1;
    let mid;

    while(low <= high)
    {
        mid = Math.floor((low+high)/2);

        if(ele === arr[mid])
            return true;

        else if(ele < arr[mid])
            high = mid - 1;
        
        else
            low = mid + 1;
    }
    
    return false;
}

function getArray()
{
    document.getElementById("ArrayOutput").innerHTML = "The Sorted Elements are:<br>["+arr+"]<br>";
}

function getElement()
{
    let ele = parseInt(document.getElementById("element").value);
    
    if(binarySearch(arr, ele))
        document.getElementById("ElementOutput").innerHTML = "Element Found!";
    
    else
    document.getElementById("ElementOutput").innerHTML = "Element Not Found!";
}