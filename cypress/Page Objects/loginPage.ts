class loginPage{

username: string
password: string
login: string


    constructor(){


        this.username = '//input[@name = "userName"]'
        this.password = '//input[@name = "password"]'
        this.login = '[aria-label="Sign in"]'
    }
}

export default loginPage;