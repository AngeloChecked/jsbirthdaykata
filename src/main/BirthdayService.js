const fs = require('fs');
const readline = require('readline');
const { fromEvent } = require('rxjs');
const { scan, takeUntil, takeLast} = require('rxjs/operators');

module.exports = {

    findEmployeeByDate: (date) => {
        return {
            lastName: "Doe",
            firstName: "John", 
            dateOfBirth: "1982/10/08", 
            email: "john.doe@foobar.com"
        };
    },
    readFileLine: (fileNamePath) =>{
        const readInterface = readline.createInterface(fs.createReadStream(fileNamePath));
        const source = fromEvent(readInterface, 'line');
        const end$ = fromEvent(readInterface, 'close');

        return new Promise((resolve,rejected) => 
            source.pipe(
                scan((acc, curr) => { acc.push(curr); return acc; }, []),
                takeUntil(end$),
                takeLast(1)
            ).subscribe(lastAccumulateValue => resolve(lastAccumulateValue))
        );
    },
    serializeLineToEmployee: (line, valueNames) =>{
        let employeeValues = line.split(',')
                .map(value => value.trim());


                


        let map = valueNames.reduce((acc, value, index) => {
            acc[value] = employeeValues[index];
            return acc;
        },{});

        return map;
    }

};