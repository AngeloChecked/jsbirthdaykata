const assert = require('assert');
const {findEmployeeByDate} = require('../main/BirthdayService');
const {readFileLine} = require('../main/BirthdayService');
const {serializeLineToEmployee} = require('../main/BirthdayService');

    describe('find employee by date',  () => {

        beforeEach(() => {

        });

        it('should return file lines in array', async () => {
            let fileLines = await readFileLine('src/resources/flat.txt');

            assert.deepEqual(fileLines, [
                'last_name, first_name, date_of_birth, email',
                'Doe, John, 1982/10/08, john.doe@foobar.com',
                'Ann, Mary, 1975/09/11, mary.ann@foobar.com'
            ]);
        });

        it('should return employee form linestring', async () => {
            let employee = serializeLineToEmployee('Doe, John, 1982/10/08, john.doe@foobar.com', ['lastName','firstName','dateOfBirth','email']);
                            

            assert.deepEqual(employee, {
                lastName: "Doe",
                firstName: "John", 
                dateOfBirth: "1982/10/08", 
                email: "john.doe@foobar.com"
            });
        });

        xit('should return employee', () => {
            
            let employee1 = findEmployeeByDate("1982/10/08");
            let employee2 = findEmployeeByDate("1975/09/11");

            assert.deepEqual(employee1, {
                lastName: "Doe",
                firstName: "John", 
                dateOfBirth: "1982/10/08", 
                email: "john.doe@foobar.com"
            });

            assert.deepEqual(employee2, {
                lastName: "Ann",
                firstName: "Mary", 
                dateOfBirth: "1975/09/11", 
                email: "mary.ann@foobar.com"
            });
        });

    });

