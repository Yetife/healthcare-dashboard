import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AppointmentDetails from "../components/AppointmentDetails";
import ClinicMap from "../components/ClinicMap";

const AppointmentPage = () => {
    const appointment = useSelector((state) => state.appointments.selected);
    const navigate = useNavigate();

    return (
        <div className="p-6 bg-gradient-to-r from-indigo-300 to-purple-300 min-h-screen text-white">
            <button onClick={() => navigate(-1)} className="mb-4 bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-600">← Back</button>
            <h1 className="md:text-3xl text-xl font-bold text-center mb-6">Patient Details</h1>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto text-gray-900">
                {appointment ? (
                    <>
                        <AppointmentDetails appointment={appointment} />
                        {appointment.location && <ClinicMap location={appointment.location} />}
                    </>
                ) : (
                    <p>No appointment selected.</p>
                )}
            </div>
        </div>
    );
};

export default AppointmentPage;