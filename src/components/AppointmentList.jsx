import { useSelector, useDispatch } from "react-redux";
import { selectAppointment } from "../redux/appointmentsSlice";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AppointmentList = ({appointments}) => {
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const { list, filters } = useSelector((state) => state.appointments);
    //
    // const filteredAppointments = list.filter((a) =>
    //     (!filters.doctor || a.doctor_name.toLowerCase().includes(filters.doctor.toLowerCase())) &&
    //     (!filters.date || a.date_time.startsWith(filters.date))
    // );

    return (
        <div className="grid gap-4 p-4">
            {appointments.slice(0, 10).map((appointment, index) => (
                <motion.div
                    key={appointment.id}
                    className="p-4 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <h2 className="text-lg font-bold">{appointment.patient_name}</h2>
                    <p>Doctor: {appointment.doctor_name}</p>
                    <p>Date: {appointment.date_time}</p>
                    <p>Clinic: {appointment.clinic_location}</p>
                </motion.div>
            ))}
        </div>
    );
};

export default AppointmentList;