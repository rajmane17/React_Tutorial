import config from "../config";
import {Client, ID, Databases, Storage, Query} from "appwrite"

export class Services {
    client = new Client();
    Storage;
    Databases;

    constructor(){
        this.client
        .setEndpoint(config.AppwriteURL)
        .setProject(config.AppwriteProjectId);

        this.Databases = new Databases(this.client);
        this.Storage = new Storage(this.client);
    }

    async createPost({title, slug,  featuredImage, content, status, userId}){
        try {
            return await this.Databases.createDocument(
                config.AppwriteDatabaseId, 
                config.AppwriteCollectionId,
                 slug, 
                 {
                    // jo save karna hia vo yaha likho
                    title,
                    status,
                    featuredImage,
                    content,
                    userId
                 } 
                 )
        } catch (error) {
            console.log(error);
        }
    }

    async updatePost (slug, {title,  featuredImage, content, status }){
        try {
             return await this.Databases.updateDocument(
                config.AppwriteDatabaseId,
                config.AppwriteCollectionId,
                slug,
                {
                    //jo update karna hai vo dedo
                    title,
                    content,
                    status,
                    featuredImage,
                }
            )
            
        } catch (error) {
            console.log(error);
        }
    }

    async deletePost(slug){
        try {
            await this.Databases.deleteDocument(
                config.AppwriteDatabaseId, 
                config.AppwriteCollectionId, 
                slug,
                )
                // we are returning true here as we cant return the whole thing over here
            return true

        } catch (error) {
            console.log("Appwrite :: deletePost :: error", error)
            return false
        }
    }
    //Gives us a single post
    async getPost (slug){
        try{
            await this.Databases.getDocument(
                config.AppwriteDatabaseId,
             config.AppwriteCollectionId,
              slug,
              );

        }catch(error){
            console.log("Appwrite :: getPost :: error ", error);
        }
    }
    //Gives us all posts
    async getPosts(queries = [Query.equal("status", "Active")]){
        try {
            return await this.Databases.listDocuments(
                config.AppwriteDatabaseId,
                config.AppwriteCollectionId,
                // we can declare queries above or can directly make it over here using an array
                queries
                );

        } catch (error) {
            console.log("Appwrite :: getPosts :: error", error);
            return null
        }
    }

    // File Upload Services

    async uploadFile (file){
        try {
            // yaha hume return me ek fileId milega, aur hum create post karte time featured image ko id hi pass karenge
            return await this.Storage.createFile(
                config.AppwriteBucketId,
                ID.unique(),
                file,
            )    
            
        } catch (error) {
            console.log("Appwrite :: uploadFile :: error", error);
        }
    }

    async deleteFile ( fileId){
        try {
            return await this.Storage.deleteFile(
                config.AppwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite :: deleteFile :: error", error);
            return false
        }
    }

    // We dont wrap this in async bcz its very fast like this only
    getFilePreview(fileId){
        return this.Storage.getFilePreview(
            config.AppwriteBucketId,
            fileId
        )
    }
}



const Service = new Services()

export default Service

