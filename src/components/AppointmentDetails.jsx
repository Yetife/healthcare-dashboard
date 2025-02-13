const AppointmentDetails = ({ appointment }) => {
    if (!appointment) return <p>No appointment selected.</p>;

    const formatTime = (dateTime) => {
        const [datePart, timePart] = dateTime.split("T");
        if (!timePart) return "Invalid Time"; // Handle missing time data

        let [hours, minutes] = timePart.split(":").map(Number);
        const amPm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12; // Convert 24-hour to 12-hour format

        return `${hours}:${minutes.toString().padStart(2, "0")} ${amPm}`;
    };

    return (
        <div className="p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{appointment.patient_name}</h2>
            <p><strong>Doctor:</strong> {appointment.doctor_name}</p>
            <p><strong>Date:</strong> {appointment.date_time.split('T')[0]}</p>
            <p><strong>Time:</strong> {formatTime(appointment.date_time)}</p>
            <p><strong>Clinic:</strong> {appointment.clinic_location}</p>
        </div>
    );
};

export default AppointmentDetails;