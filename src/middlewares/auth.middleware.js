// import { apiError } from "../utils/apierror";
// import { asyncHandler } from "../utils/asyncHandler";
// import jwt from "jsonwebtoken"
// import { User } from "../models/user.model";


// export const verifyJWT=asyncHandler(async(req,res,next)=>{
//     try {
//         const token=req.cookies?.accessToken || req.header("authorization")?.replace("Bearer","")
//         if (!token) {
//             throw new apiError(401,"unauthorized request")
//         }
    
//         const decodedToken=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
    
//         await User.findById(decodedToken?._id).select("-password -refreshToken")
    
//         if (!user) {
//             throw new apiError(401,"Invalid Access Token")
//         }
//         req.user=user=
//         next()
//     } catch (error) {
//         throw new apiError(401,error?.message||"invalid access token")
//     }
// })


import { apiError } from "../utils/apierror.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const verifyJWT = asyncHandler(async (req, res, next) => {
  const token =
    req.cookies?.accessToken ||
    req.header("authorization")?.replace("Bearer ", "").trim();

  if (!token) {
    throw new apiError(401, "unauthorized request");
  }

  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  } catch (err) {
    throw new apiError(401, "invalid or expired access token");
  }

  const user = await User.findById(decodedToken?._id).select(
    "-password -refreshToken"
  );

  if (!user) {
    throw new apiError(401, "Invalid Access Token");
  }
  req.user = user;
  next();
});
