'use strict';

function double_to_one(collection) {
  var newArray=[];

  collection.forEach(function(elements){
    if(typeof(elements)==="number"){
      newArray.push(elements);
    }
    else{
      elements.forEach(function(element){
        newArray.push(element);
      })
    }
  });

  return newArray;
}

module.exports = double_to_one;
