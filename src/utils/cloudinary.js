// import { v2 as cloudinary } from "cloudinary";

// import fs from "fs"

// console.log("USING CLOUDINARY_URL:", process.env.CLOUDINARY_URL);

// cloudinary.config({ 
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY, 
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });





// const uploadOnCloudinary = async (localFilePath) => {
//   try {
//     if (!localFilePath) return null;

//     const response = await cloudinary.uploader.upload(localFilePath, {
//       resource_type: "auto",
//     });

//     console.log(" file is uploaded on cloudinary:", response.url);
//     return response;
//   } catch (error) {
//     console.error(" Cloudinary upload error:", error);   // IMPORTANT
//     if (localFilePath && fs.existsSync(localFilePath)) {
//       fs.unlinkSync(localFilePath);
//     }
//     return null;
//   }
// };

// export { uploadOnCloudinary };
// // const uploadOnCloudinary=async (localFilePath)=>{
// //   try {
// //     if(!localFilePath)return null
// //     const response=await cloudinary.uploader.upload(localFilePath,{
// //       resource_type:"auto"
// //     })
// //     console.log("file is uploded on cloudinary",response.url);
// //     return response;
    
// //   } catch (error) {
// //     fs.unlinkSync(localFilePath);
// //     return null;
// //   }
// // }

// // export {uploadOnCloudinary}




// // import { v2 as cloudinary } from "cloudinary";
// // import fs from "fs";

// // cloudinary.config({ 
// //   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
// //   api_key: process.env.CLOUDINARY_API_KEY, 
// //   api_secret: process.env.CLOUDINARY_API_SECRET
// // });

// // const uploadOnCloudinary = async (localFilePath) => {
// //   try {
// //     if (!localFilePath) return null;

// //     const response = await cloudinary.uploader.upload(localFilePath, {
// //       resource_type: "auto",
// //     });

// //     console.log("file is uploaded on cloudinary", response.url);

// //     // upload success ke baad hi, aur sirf agar file exist kare
// //     if (fs.existsSync(localFilePath)) {
// //       fs.unlinkSync(localFilePath);
// //     }

// //     return response;
// //   } catch (error) {
// //     console.error("Cloudinary upload error:", error);

// //     // error aane par bhi, pehle check karo file exist karti hai ya nahi
// //     if (localFilePath && fs.existsSync(localFilePath)) {
// //       fs.unlinkSync(localFilePath);
// //     }

// //     return null;
// //   }
// // };

// // export { uploadOnCloudinary };






// // cloudinary.v2.uploader
// // .upload("dog.mp4", {
// //   resource_type: "video", 
// //   public_id: "my_dog",
// //   overwrite: true, 
// //   notification_url: "https://mysite.example.com/notify_endpoint"})
// // .then(result=>console.log(result));






import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

console.log("ENV CLOUDINARY_CLOUD_NAME:", process.env.CLOUDINARY_CLOUD_NAME);
console.log("ENV CLOUDINARY_API_KEY:", process.env.CLOUDINARY_API_KEY);
console.log(
  "ENV CLOUDINARY_API_SECRET:",
  process.env.CLOUDINARY_API_SECRET?.slice(0, 4) + "***"
);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log(" file is uploaded on cloudinary:", response.url);
    return response;
  } catch (error) {
    console.error(" Cloudinary upload error:", error);
    if (localFilePath && fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }
    return null;
  }
};

export { uploadOnCloudinary };
