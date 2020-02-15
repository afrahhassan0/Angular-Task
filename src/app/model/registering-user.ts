import { User } from './user';

export class RegisteringUser extends User{
    constructor(
        public password: string, 
        public email:string,
        public gender: string,
        
     ){
         super( email , password );
     }  
}
