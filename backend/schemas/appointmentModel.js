import mongoose from 'mongoose';

const appointmentSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "doctor",
      required: true,
    },
    date: {
      type: Number,
      required: true,
    },
  
    status: {
      type: String,
      required: true,  // corrected 'require' to 'required'
      default: "pending",
    },
  },
  { timestamps: true }
);
 // doctorId is directly populated from the Appointment schema, no need for model argument if the model is correctly defined


const appointmentModel = mongoose.model("appointments", appointmentSchema);

export default appointmentModel;
