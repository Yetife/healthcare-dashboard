const AppointmentDetails = ({ appointment }) => {
    if (!appointment) return <p>No appointment selected.</p>;

    return (
        <div className="p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{appointment.patient_name}</h2>
            <p><strong>Doctor:</strong> {appointment.doctor_name}</p>
            <p><strong>Date & Time:</strong> {appointment.date_time}</p>
            <p><strong>Clinic:</strong> {appointment.clinic_location}</p>
        </div>
    );
};

export default AppointmentDetails;