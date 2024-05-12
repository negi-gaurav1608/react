import { Client, Databases, Query, Storage } from "appwrite";
import Conf from "../conf/Conf.js";

export class Service{
    client=new Client()
    databases;
    buckets;

    constructor(){
        this.client
        .setEndpoint(Conf.appwriteUrl)
        .setProject(Conf.appwriteProjectId)

        this.databases = new Databases(this.client);
        this.buckets=new Storage(this.client);
    }

    async createPost({title,slug,content,FeaturedImage,status,UserId}){
        try{
            return await this.databases.createDocument(
                Conf.appwriteDatabaseId,
                Conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    FeaturedImage,
                    status,
                    UserId,
                }
            )
        }catch(err){
            throw err;
        }
    }

    async updatePost(slug,{title,content,FeaturedImage,status}){
        try{
            return await this.databases.updateDocument(
                Conf.appwriteDatabaseId, // databaseId
                Conf.appwriteCollectionId, // collectionId
                slug, // documentId
                {
                    title,
                    content,
                    FeaturedImage,
                    status
                }, // data (optional)
                //["read("any")"] permissions (optional)
            );
        }catch(err){
            throw err;
        }
    }

    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                Conf.appwriteDatabaseId, // databaseId
                Conf.appwriteCollectionId, // collectionId
                slug // documentId
            );
            return true;
        }
        catch(err){
            console.log(err);
            return false;
        }
    }

    async getPost(slug){
        try{
            return await this.databases.getDocument(
                Conf.appwriteDatabaseId,
                Conf.appwriteCollectionId,
                slug
            );
        }catch(err){
            console.log(err);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status",true)]){
        try{
            return await this.databases.listDocuments(
                Conf.appwriteDatabaseId, // databaseId
                Conf.appwriteCollectionId, // collectionId
                queries,
                //[]  queries (optional)

            );
        }catch(err){
            console.log(err);
            return false;
        }
    }

    //file upload method
    async uploadFile(file){
        try{
            return await this.buckets.createFile(
                Conf.appwriteBucketId,
                ID.unique(),
                file,
            )
        }
        catch(err){
            console.log(err);
            return false;
        }
    }

    //delete file
    async deleteFile(fileID){
        try{
            await this.buckets.deleteFile(
                Conf.appwriteBucketId,
                fileID,
            )
            return true;
        }catch(err){
            console.log(err);
            return false;
        }
    }

    async getFilePreview(fileID){
        return this.getFilePreview(
            Conf.appwriteBucketId,
            fileID
        )
    }
}

const service=new Service()

export default service