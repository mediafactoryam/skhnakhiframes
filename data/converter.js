const fileToRead = "datafiles/data. sknakh. for demography - Sheet1.csv"
const newFile = "datafiles/datasetv.0.3.csv"
const namesAndSexes = require("./names.json")

const csv = require('csv-parser');
const fs = require('fs');
let groupCounter = 0

fs.unlink(newFile,()=>{})

fs.createReadStream(fileToRead)
    .pipe(csv())
    .on('data', (row) => {
        const sex = getNamesAndSexes(row.names)
        console.log(row.id, row.names, sex, row.dates)
        fs.appendFile(newFile, makeString(row.id, row.names, sex, row.dates), ()=>{})
        
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
    });

const makeString = (groupCounter, name, sex, date) => {
    return groupCounter+","+name+","+sex+","+date+"\n"
}


const getNamesAndSexes = (namestring) => {
    const names = namestring.split(" ")
    const nameToCheck = names[1]
    const nameAndSex = findSexByName(nameToCheck)
    return nameAndSex
}


const findSexByName = (name) => {
    const filterer = (ns) => { return ns.name == name }
    const result = namesAndSexes.filter(filterer)
    const reducer = (accumulator, currentValue) => {
        return accumulator + " " + currentValue.sex
    }

    return (result.length > 0) ? result.reduce(reducer, "") : []

}


