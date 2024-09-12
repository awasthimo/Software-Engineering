import mongoose from "mongoose";


const studentSchema = mongoose.Schema(
    {
      name: { type: String, required: true },
     rollno: { type: Number, required: true, unique: true },
      cgpa: { type: Number, required: true },
      gender:{type:String,enum: ['male', 'female'], require:true},
      preference:{type:String,enum:['Ramanujan','Aryabhatta','Visvesariya','Raman','Bhabha'],require:true},
    },
    {
      timestamps: true,
    }
  );



const Student = mongoose.model("Student", studentSchema);

export default Student;