export class User {

    constructor( 
        public id: number,
        public username,
        public email
     ){  }

     public getId(){
         return this.id;
     }
}
