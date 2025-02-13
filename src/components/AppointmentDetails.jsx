import {formatTime} from "../utils/timeUtils.js";

const AppointmentDetails = ({ appointment }) => {
    if (!appointment) return <p>No appointment selected.</p>;


    return (
        <div>
            <div className="p-4 border rounded-lg shadow-md">
                <h3 className="text-xl font-bold py-2"><strong>Patient Name:</strong> {appointment.patient_name}</h3>
                <p className="py-2"><strong>Doctor Name:</strong> {appointment.doctor_name}</p>
                <p className="py-2"><strong>Appointment Date:</strong> {appointment.date_time.split('T')[0]}</p>
                <p className="py-2"><strong>Appointment Time:</strong> {formatTime(appointment.date_time)}</p>
                <p className="py-2"><strong>Clinic:</strong> {appointment.clinic_location}</p>
            </div>
        </div>

    );
};

export default AppointmentDetails;