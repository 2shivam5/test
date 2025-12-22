import { asyncHandler } from "../utils/asyncHandler.js";   


const registerUser=asyncHandler(async(req,res)=>{
    res.status(200).json({
        name:"Gyanvendra Mishra",
        city:"Noida",
        age:22,

    })
})
const loginUser=asyncHandler(async(req,res)=>{
    res.status(200).json({
        userId:"737911zx",
        password:"@#123@#"
    })
})
const userName=asyncHandler(async(req,res)=>{
    res.status(200).json({
        name:"Gyanvendra Mishra",
        address:"kushinagar"

    })
})






export {registerUser}
export {loginUser}
export{userName}