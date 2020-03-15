

module.exports = class BirthdayService{
    constructor({employeeRepository, emailService}){
        this.employeeRepository = employeeRepository;
        this.emailService = emailService;
    }

    sendGreetings(today){

    }
};