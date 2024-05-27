// There is a best production based code to deal with appwrite service. Here is authinticaton part is done in this code, thre is the best way to defining code. Here we use documention to write a code. 


import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite"

// we use class here because it becaome dificult when we want to access a perticular funtion. When we use class it become easy to access mthod because it return object, so we can access it method easely 
export class AuthService{
    client = new Client()
    account

    constructor(){
        this.client
        .setEndpoint("https://cloud.appwrite.io/v1") //conf.appwiteUrl 
        .setProject("66279803a9893da824eb"); //conf.appwiteProjectId 
        this.account = new Account(this.client);
    }

    // Create account
    async createAccount({email, password, name}){ 
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            console.log("user:", userAccount);
            if(userAccount){
                //call another method
                return this.login({email, password}) // if the user is register in the app it here call the login method also and redirect to the home page 
            }else{
                return userAccount
            }
            
        } catch (error) {
            throw error
        }
    }

    // Login
    async login({email, password}){
        console.log(email, password);
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error
        }
    }

    // get user check user is exist or not 
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null
    }

    async logout(){
        try {
            return await this.account.deleteSessions() // in appwrite there are two types of deleteSessions() method deleteSessions() is use when we deleteSessions or logout from all browser and deleteSession(parameter) is use deleteSession or logout from particulat place
        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthService() // here we make a object 

export default authService