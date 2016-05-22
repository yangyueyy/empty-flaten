'use strict';

function double_to_one(collection) {
  var newArrays=getNewArray(collection);
  var tidyArray=tidyNewArray(newArrays);

  return tidyArray;
}

function getNewArray(collection){
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

function tidyNewArray(arrays){
  var collectArrays=[];

  arrays.forEach(function (array){
    var existValue = isExistValue(collectArrays, array);

    if (!existValue) {
      collectArrays.push(array);
    }
  });

  return collectArrays;
}

function isExistValue(collectArrays, array) {
  var flag = false;

  collectArrays.forEach(function (collectArray) {
    if (collectArray === array) {
      flag = true;
    }
  });

  return flag;
}

module.exports = double_to_one;
