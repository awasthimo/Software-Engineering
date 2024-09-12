import Student from "../model/student.js";

const getData = async(req,res)=>{
   try {
     const students = await Student.find({});
     if(students){
        res.json(students); 
     }
     
   } catch (error) {
    console.log(error);
   }
// res.json({sdf:"sfd  "})
}

export {getData};