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
                    className="p-4 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => {
                        dispatch(selectAppointment(appointment));
                        navigate(`/appointment/${appointment.id}`);
                    }}
                >
                    <h2 className="text-lg font-bold">{appointment.patient_name}</h2>
                    <p>Doctor: {appointment.doctor_name}</p>
                    <p>Date: {appointment.date_time.split('T')[0]}</p>
                    <p>Time: {formatTime(appointment.date_time)}</p>
                    <p>Clinic: {appointment.clinic_location}</p>
                </motion.div>
            ))}
        </div>
    );
};

export default AppointmentList;
