export default class UserServices{
    constructor(loggerServices){
        this.user=[];
        this.loggerServices=loggerServices;
    }

    add(user){
        this.user.push(user);
        this.loggerServices.log(user)
        // this.loggerServices.doSomething();
    }

    list(){
        return this.user
    }

    getById(id){
        return this.user.find(u=>u.id===id);
    }
}