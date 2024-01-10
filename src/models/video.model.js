import { Schema, model } from "mongoose";

const videoSchema = new Schema(
    {
        videoFile:{
            type: String, // cloudinary
            required: true
        },
        thumbnail:{
            type: String, // cloudinary
            required: true
        },
        title:{
            type: String,
            required: true,
            index: true
        },
        description:{
            type: String,
            required: true
        },
        views:{
            type: Number,
            default: 0
        },
        duration:{
            type: String, // cloudinary
        },
        isPublish:{
            type: Boolean,
            default: true
        },
        owner:{
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    }, 
    {timestamps: true}
)

export const Video = model("Video", videoSchema)