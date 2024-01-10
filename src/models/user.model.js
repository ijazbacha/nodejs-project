import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email:{
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true
        },
        fullName:{
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avater:{
            type: String, // cloudinary
            required: true
        },
        coverImage:{
            type: String
        },
        password:{
            type: String,
            required: true
        },
        refreshToken:{
            type: String,
        },
        watchHistory:[
            {
                type: Schema.Types.ObjectId,
                ref: "Video",
                required: true
            }
        ]
    },
    {timestamps: true}
)

export const User = mongoose.model("User", userSchema)