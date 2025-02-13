import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectAppointment } from "../redux/appointmentsSlice";
import {formatTime} from "../utils/timeUtils.js";


const AppointmentList = ({ appointments }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className="grid gap-4 p-4">
            {appointments.map((appointment, index) => (
                <motion.div
                    key={appointment.id}
                    className="p-4 bg-gradient-to-r from-green-400 to-blue-500 text-black rounded-lg shadow-lg cursor-pointer hover:shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => {
                        dispatch(selectAppointment(appointment));
                        navigate(`/appointment/${appointment.id}`);
                    }}
                >
                    <p><strong className="text-lg font-medium">Appointment ID:</strong> {appointment.id}</p>
                    <p><strong className="text-lg font-medium">Patient Name:</strong> {appointment.patient_name}</p>
                    <p><strong className="text-lg font-medium">Doctor Name:</strong> {appointment.doctor_name}</p>
                    <p><strong className="text-lg font-medium">Appointment Date & Time:</strong> {appointment.date_time.split('T')[0]} {formatTime(appointment.date_time)}</p>
                    <p><strong className="text-lg font-medium">Clinic:</strong> {appointment.clinic_location}</p>
                </motion.div>
            ))}
        </div>
    );
};

export default AppointmentList;
