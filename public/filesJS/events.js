let jsonFileContent = '';
let searchingResult = [];

//import and display json file
function importFile() {
    let fileJson = document.getElementById('selectFiles').files;
    let resultTextArea = document.getElementById('result');
    if (fileJson.length <= 0 || !fileJson[0].type.includes('json')) {
        return false;
    }
    //if file not empty
    else{
        resultTextArea.style.height = "100px";
        let fileReader = new FileReader();
        fileReader.readAsText(fileJson.item(0));
        fileReader.onload = function(e) { 
          jsonFileContent = JSON.parse(e.target.result);
          let formatted = JSON.stringify(jsonFileContent,null,2);
      
          resultTextArea.style.height = "300px";
          resultTextArea.value = formatted;
        }
    }
};

function filterJsonFile(dataSearch){
    searchingResult = [];
    let resultTextArea = document.getElementById('result');

//start filter after third inserted key
    if(dataSearch.length > 2){
        let formattedJson = toJsonFormat(jsonFileContent, dataSearch);
        resultTextArea.value = JSON.stringify(formattedJson,null,2);
    }
    //reset text area
    else{
        resultTextArea.value = JSON.stringify(jsonFileContent,null,2);
    }
}

//create new object after filtered data in json format
function toJsonFormat(theObject, keyValue){
    //debugger
    var result = null;
    if(theObject instanceof Array) {
        for(var i = 0; i < theObject.length; i++) {
            result = toJsonFormat(theObject[i], keyValue);
            //debugger
        }
    }
    else
    {
        for(var prop in theObject) {
            if(prop.includes(keyValue)) {
                if(typeof theObject[prop] == 'object'){
                    let tempObj = {};
                    tempObj[prop] = theObject[prop];
                    searchingResult.push(tempObj);
                }
                else{
                    searchingResult.push(prop + ' : ' + theObject[prop]);
                }
            }
            if(theObject[prop] instanceof Object || theObject[prop] instanceof Array)
                result = toJsonFormat(theObject[prop], keyValue);
        }
    }

    return  searchingResult;
}

//not for use yet
// function displayData(data){
//     let table = document.querySelector('div#jsonList > table');
//     table.innerHTML = ''; // empty table
    
//     data.forEach((searchResult, index) => {
//         let trElement = document.createElement('tr');
//         //create header of table and fill first line
//         if(index == 0){
//             let trElementHeader = document.createElement('tr');
//             let thIndexElement = document.createElement('th');
//                 thIndexElement.prepend('Id');
//                 trElementHeader.prepend(thIndexElement);

//             for (const key in searchResult) {
//                 thElement = document.createElement('th');
//                 thElement.append(key);
//                 trElementHeader.append(thElement);

//                 tdElement = document.createElement('td');
//                 tdElement.append(searchResult[key]);
//                 trElement.append(tdElement);
//             }
            
//             //create index of first row
//             let tdIndexElement = document.createElement('td');
//             tdIndexElement.prepend(index);
//             trElement.prepend(tdIndexElement);

//             table.append(trElementHeader);
//             table.append(trElement);
//         }
//         //fill table
//         else{
//             for (const key in searchResult) {
//                 tdElement = document.createElement('td');
//                 tdElement.append(searchResult[key]);
//                 trElement.append(tdElement);
                
//             }
//             //create index of row
//             let tdIndexElement = document.createElement('td');
//             tdIndexElement.append(index);
//             trElement.prepend(tdIndexElement);
//             table.append(trElement);
//         }
//     });
// }




