class user{
    constructor(id,name,age,role="user"){
        this.role=role;
        this.id=id;
        this.name=name;
        this.age=age;
        this.date = new Date();
    }
}

module.exports=user;
