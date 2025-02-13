import {formatTime} from "../utils/timeUtils.js";

const AppointmentDetails = ({ appointment }) => {
    if (!appointment) return <p>No appointment selected.</p>;


    return (
        <div>
            <div className="p-4 border rounded-lg shadow-md">
                <h3 className="text-xl font-bold"><strong>Patient Name:</strong> {appointment.patient_name}</h3>
                <p><strong>Doctor:</strong> {appointment.doctor_name}</p>
                <p><strong>Date:</strong> {appointment.date_time.split('T')[0]}</p>
                <p><strong>Time:</strong> {formatTime(appointment.date_time)}</p>
                <p><strong>Clinic:</strong> {appointment.clinic_location}</p>
            </div>
        </div>

    );
};

export default AppointmentDetails;