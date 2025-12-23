// import { asyncHandler } from "../utils/asyncHandler.js";   
// import { apiError } from "../utils/apierror.js";
// import { User } from "../models/user.model.js";
// import { uploadOnCloudinary } from "../utils/cloudinary.js";
// import { apiResponse } from "../utils/apiResponse.js";
// import fs from 'fs';



// const registerUser = asyncHandler(async (req, res) => {
    
//   const { fullname, username, email, password } = req.body;
//   console.log("body:", req.body);
//   console.log("files:", req.files);

//   const avatarLocalPath = req.files?.avatar?.[0]?.path;
//   const coverImageLocalPath = req.files?.coverImage?.[0]?.path;

//   console.log("avatarLocalPath:", avatarLocalPath);
//   console.log("coverImageLocalPath:", coverImageLocalPath);

//   if ([fullname, username, email, password].some((field) => !field || field.trim() === "")) {
//     throw new apiError(400, "All fields are requierd");
//   }

//   const existedUser = await User.findOne({
//     $or: [{ username }, { email }],
//   });
//   if (existedUser) {
//     throw new apiError(409, "User with email or username already exists");
//   }

//   if (!avatarLocalPath) {
//     throw new apiError(400, "avatar file is required");
//   }

//   const avatar = await uploadOnCloudinary(avatarLocalPath);  
//   const coverImage = coverImageLocalPath
//     ? await uploadOnCloudinary(coverImageLocalPath)
//     : null;
//     console.log("debug avatar:",avatar);
//     console.log("debug CoverImage:",coverImage);
    
    

// const avatarUrl =
//   avatar && (avatar.secure_url || avatar.url)
//     ? avatar.secure_url || avatar.url
//     : null;

// const coverImageUrl =
//   coverImage && (coverImage.secure_url || coverImage.url)
//     ? coverImage.secure_url || coverImage.url
//     : "";

// if (!avatarUrl) {
//   throw new apiError(400, "avatar file upload failed");
// }


// let user;
// try{
//      user = await User.create({
//   fullname,
//   avatar: avatarUrl,
//   coverImage: coverImageUrl,
//   email,
//   password,
//   username: username.toLowerCase(),
// });
// }catch(err){
//     console.error("register error",err);
//     throw err;
// }
//   const createdUser = await User.findById(user._id).select("-password -refreshToken");

//   if (!createdUser) {
//     throw new apiError(500, "something went wrong while registering the user");
//   }

//   return res
//     .status(201)
//     .json(new apiResponse(200, createdUser, "user registered successfully"));
// });
// export {registerUser}






import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apierror.js";
import { User } from "../models/user.model.js";
import { apiResponse } from "../utils/apiResponse.js"; import fs from "fs";

const registerUser = asyncHandler(async (req, res) => {
  const { fullname, username, email, password } = req.body;
  console.log("body:", req.body);
  console.log("files:", req.files);

  const avatarLocalPath = req.files?.avatar?.[0]?.path;
  const coverImageLocalPath = req.files?.coverImage?.[0]?.path;

  console.log("avatarLocalPath:", avatarLocalPath);
  console.log("coverImageLocalPath:", coverImageLocalPath);

  if ([fullname, username, email, password].some((field) => !field || field.trim() === "")) {
    throw new apiError(400, "All fields are requierd");
  }

  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (existedUser) {
    throw new apiError(409, "User with email or username already exists");
  }

  if (!avatarLocalPath) {
    throw new apiError(400, "avatar file is required");
  }

  const avatarUrl = avatarLocalPath;                  const coverImageUrl = coverImageLocalPath || "";  
  let user;
  try {
    user = await User.create({
      fullname,
      avatar: avatarUrl,
      coverImage: coverImageUrl,
      email,
      password,
      username: username.toLowerCase(),
    });
  } catch (err) {
    console.error("register error", err);
    throw err;
  }

  const createdUser = await User.findById(user._id).select("-password -refreshToken");

  if (!createdUser) {
    throw new apiError(500, "something went wrong while registering the user");
  }

  return res
    .status(201)
    .json(new apiResponse(200, createdUser, "user registered successfully"));
});

export { registerUser };





