class userTemplate {
 constructor(name, password, age) {
        this.name =name;
        this.password =password;
        this.age= age;
        this.connected =false;
        this.data =new Date();
    }


longin() {
    this.connected =true;
    this.checkStatus();

}
logout() {
    this.connected= false;
    this.checkStatus();

}

checkStatus() {
    console.log('Your login status :', this.connected);
}

}
