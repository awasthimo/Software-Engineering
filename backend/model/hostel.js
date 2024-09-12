import mongoose from "mongoose";

const hostelSchema = mongoose.Schema(
  {
    Hostelname: { type: String, required: true },
    For: { type: String, required: true },
    noofseat: { type: Number, default: 60 },
  },
  {
    timestamps: true,
  }
);
const Hostel = mongoose.model("Hostel", hostelSchema);

export default Hostel;