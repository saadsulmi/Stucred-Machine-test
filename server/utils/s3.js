const { S3Client,PutObjectCommand, ListObjectsV2Command,GetObjectCommand } = require('@aws-sdk/client-s3')
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { v4: uuidv4 } = require('uuid');
require('dotenv').config()

const accessKeyId=process.env.ACCESS_KEY
const secretKeyId=process.env.SECRET_KEY
const bucketName = process.env.BUCKET
const region = process.env.REGION

const s3= new S3Client({
    region,
    credentials: {
        accessKeyId,
        secretAccessKey: secretKeyId,
    },
});

const uploadImage = async(file,userId)=>{
    try {
        const key = `${userId}/${uuidv4()}`;
        const command = new PutObjectCommand({
            Bucket:bucketName,
            Key:key,
            Body:file,
            ContentType:'image/jpg'
        })
        await s3.send(command);
        const url=await getImage(userId,key)
        return url
    } catch (error) {
        return error
    }
}

const getImageKeysByProject= async(projectId,key)=>{
    const command   = new ListObjectsV2Command({
        Bucket:bucketName,
        prefix:projectId
    })
    const {Contents}= await s3.send(command)||[];
    return  Contents.filter(image=>image.Key===key)
}

const getImage=async(projectId,key)=>{
    try {
        const imageKeys = await getImageKeysByProject(projectId,key);
        const command=new GetObjectCommand({Bucket:bucketName,Key:imageKeys[0].Key})
        const presignedUrl= await getSignedUrl(s3,command,{expiresIn:400000})
        return presignedUrl
    } catch (error) {
        console.log(error);
    }
}
const uploadVideo = async (file, userId) => {
    try {
        const key = `${userId}/${uuidv4()}`;
        const command = new PutObjectCommand({
            Bucket: bucketName,
            Key: key,
            Body: file,  
            ContentType: 'video/mp4',  
        });

        await s3.send(command);

        const url = await getVideoUrl(userId, key);

        return url;
    } catch (error) {
        return error;
    }
};

const getVideoKeysByProject = async (projectId, key) => {
    const command = new ListObjectsV2Command({
        Bucket: bucketName,
        Prefix: projectId, 
    });

    const { Contents } = await s3.send(command) || [];
    return Contents.filter(video => video.Key === key);
};

const getVideoUrl = async (projectId, key) => {
    try {
        const videoKeys = await getVideoKeysByProject(projectId, key);

        if (videoKeys.length > 0) {
            const command = new GetObjectCommand({
                Bucket: bucketName,
                Key: videoKeys[0].Key,
            });

            const presignedUrl = await getSignedUrl(s3, command, { expiresIn: 400000 });
            return presignedUrl;
        } else {
            throw new Error('Video not found');
        }
    } catch (error) {
        console.error(error);
        throw error;  
    }
};

module.exports={
    uploadImage ,
    uploadVideo
}