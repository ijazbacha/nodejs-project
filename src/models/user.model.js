import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import { Jwt } from "jsonwebtoken";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true
        },
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avater: {
            type: String, // cloudinary
            required: true
        },
        coverImage: {
            type: String
        },
        password: {
            type: String,
            required: true
        },
        refreshToken: {
            type: String,
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video",
                required: true
            }
        ]
    },
    { timestamps: true }
)

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) return next()
    this.password = bcrypt.hash(this.password, 10)
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

export const User = mongoose.model("User", userSchema)