export const dataValidator = (dataObject) => {
    // console.log(dataObject)
    var result = true;
    var arrValue =  Object.values(dataObject)
    arrValue.forEach(data => {
        if(data === 0 || data === '' || data === null) result = false;
    });
    return result;
}
