// Selection Sort - Psuedocode:
// Find the smallest card. Swap it with the first card.
// Find the second-smallest card. Swap it with the second card.
// Find the third-smallest card. Swap it with the third card.
// Repeat finding the next-smallest card, and swapping it into the correct position until the array is sorted.


var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

var selectionSort = function(array) {
    for (var idx = 0; idx < array.length; idx++){
        var minIdx = indexOfMinimum(array,idx);
        swap(array,idx,minIdx);
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
println("Array after sorting:  " + array);

Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);
