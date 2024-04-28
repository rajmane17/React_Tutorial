import config from "../config/config";
import {Client, Account, ID} from "appwrite"

// here we are just designing the functionality
export class AuthService {
    client = new Client();
    account;


    constructor(){
        this.client
        .setEndpoint(config.AppwriteURL)
        .setProject(config.AppwriteProjectId)

        this.account = new Account (this.client)

    }

    async createAccount({email, password, name}) {
        try {
           const userAcc =  await this.account.create(ID.unique(), email, password, name)
           if (userAcc) {
            // call another function 
            this.login({email, password})
           }
        } catch (error) {
            console.log(error);
        }
    }

    async login ({email, password}) {
        try {
            const accExist = await this.account.createEmailSession({email, password})
            if( accExist ) {
                return accExist
            }
            
        } catch (error) {
            console.log("You got an error in login :-", error)
        }
    }

    async signOut (){
        //deletesessions will log you out from all devices
        const removed = await this.account.deleteSessions()

        try {
            return removed
        } catch (error) {
            console.log(error);
        }

    }

    async getCurrentUser(){
        try{
            // we can also handle this using if-else 
            return await this.account.get()
        }catch(error) { 
            // this condition exist when there is any prblm reaching the server etc
            console.log("Sorry there is an error in reaching the service", error);
        }

        // This condition exist when user doesnt exist only
        return null
    }

}

// we can directly access login,signOut,getCurrentUser using dot from authService
const authService = new AuthService()

export default authService

