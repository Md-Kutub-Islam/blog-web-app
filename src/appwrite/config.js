// Here we write a config code of apprite. Here we deal with databases and storege 

import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite"
console.log("conf:", conf.appwiteUrl);

export class Service{
    client = new Client()
    databases
    bucket

    constructor(){
        console.log("https://cloud.appwrite.io/v1"); //conf.appwiteUrl
        this.client
        .setEndpoint("https://cloud.appwrite.io/v1") //conf.appwiteUrl 
        .setProject("66279803a9893da824eb"); //conf.appwiteProjectId
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    // create post 
    async createPost({title, slug, content, featureImage, status, userId}){
        try {
            return await this.databases.createDocument(
                "662799784d6988d0bebe", //conf.appwiteDatabaseId,
                "662799cb58d2bf0bef53", //conf.appwiteCollectionId,
                slug, // it is a document id and we can also use ID.unique(). note slug treat as a document id
                {
                    title,
                    content,
                    featureImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

    // update post 
    async updatePost(slug,{title, content, featureImage, status}){
        try {
            return await this.databases.updateDocument(
                "662799784d6988d0bebe", //conf.appwiteDatabaseId,
                "662799cb58d2bf0bef53", //conf.appwiteCollectionId,
                {
                    title,
                    content,
                    featureImage,
                    status,
                }
            )
        } catch (error) {
            throw error
        }
    }

    // get posts
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                "662799784d6988d0bebe", //conf.appwiteDatabaseId,
                "662799cb58d2bf0bef53", //conf.appwiteCollectionId,
                slug
            
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }
}

const service = new Service()

export default service