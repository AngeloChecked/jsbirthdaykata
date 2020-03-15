const assert = require('assert');
const BirthdayService = require('../main/BirthdayService');
const EmailService = require('../main/EmailService');
const EmployeeRepository = require('../main/EmployeeRepository');


describe('acceptance',  () => {

    let birthdayService = new BirthdayService({
        employeeRepository: new EmailService(), 
        emailService: new EmployeeRepository()
    });

    it('send email to Ann Mary', () => {

        birthdayService.sendGreetings(new Date());

    });

});


