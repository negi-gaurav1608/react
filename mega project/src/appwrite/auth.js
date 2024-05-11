import conf from '../conf/Conf';

import { Account, Client, ID } from "appwrite";

export class AuthService{
    client=new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account=new Account(this.Client);

    }

    async createAccount({email,password,name}){
        try{
            const userAccount=await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                //return userAccount;
                //call another method
                return this.login({email,password});
            }
            else{
                return userAccount;
            }
        }catch(error){
            throw error;
        }
    }

    async login({email,password}){
        try{
            return await account.createEmailSession(
                email,
                password
            );
            
        }catch(error){
            throw error;
        }
    }

    async getCurrentUser(){
        try{
            await this.account.get();
        }catch(err){
            throw err;
        }
        return null;
    }
    
    async logout(){
        try{
            await this.account.deleteSessions()
        }
        catch(err){
            throw err;
        }
    }
}

const authService=new AuthService();

export default authService