const assert = require('assert');
const {findEmployeeByDate} = require('../main/BirthdayService');

    describe('find employee by date',  () => {

        beforeEach(() => {

        });

        it('should return employee', () => {
            
            let employee = findEmployeeByDate("1982/10/08");

            assert.deepEqual(employee, {
                lastName: "Doe",
                firstName: "John", 
                dateOfBirth: "1982/10/08", 
                email: "john.doe@foobar.com"
            });
        });

    });

