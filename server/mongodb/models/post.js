import mongoose from "mongoose";

const Post = new mongoose.Schema({
  name: {
    type: String,
    reqired: true,
  },
  prompt: {
    type: String,
    reqired: true,
  },
  photo: {
    type: String,
    reqired: true,
  },
});

const PostSchema = mongoose.model("Post", Post);

export default PostSchema;
