function filterPersons(data){
    let table = document.querySelector('div#personList > table');
    table.innerHTML = ''; // empty table
    
    //start search after second inserted value
    if(data.length >= 2){
        let thElement;
        let tdElement;
        let persons = JSON.parse(objectsPeronsJson);
        //filter
        let result = persons.persons.filter(el => {
            return el.career.toLowerCase().includes(data.toLowerCase());
        });
        result.forEach((searchResult, index) => {
            let trElement = document.createElement('tr');
            //create header of table and fill first line
            if(index == 0){
                let trElementHeader = document.createElement('tr');
                let thIndexElement = document.createElement('th');
                    thIndexElement.prepend('Id');
                    trElementHeader.prepend(thIndexElement);

                for (const key in searchResult) {
                    thElement = document.createElement('th');
                    thElement.append(key);
                    trElementHeader.append(thElement);
    
                    tdElement = document.createElement('td');
                    tdElement.append(searchResult[key]);
                    trElement.append(tdElement);
                }
                
                //create index of first row
                let tdIndexElement = document.createElement('td');
                tdIndexElement.prepend(index);
                trElement.prepend(tdIndexElement);

                table.append(trElementHeader);
                table.append(trElement);
            }
            //fill table
            else{
                for (const key in searchResult) {
                    tdElement = document.createElement('td');
                    tdElement.append(searchResult[key]);
                    trElement.append(tdElement);
                    
                }
                //create index of row
                let tdIndexElement = document.createElement('td');
                tdIndexElement.append(index);
                trElement.prepend(tdIndexElement);
                table.append(trElement);
            }
        });
    }
}

