import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchAppointments} from "./redux/appointmentsSlice.js";
import FilterBar from "./components/FilterBar.jsx";
import AppointmentList from "./components/AppointmentList.jsx";
import Pagination from "./components/Pagination.jsx";

const App = () => {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.appointments.status);
    const appointments = useSelector((state) => state.appointments.list);
    const filters = useSelector((state) => state.appointments.filters);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => { if (status === "idle") dispatch(fetchAppointments()); }, [status, dispatch]);

    const totalPages = Math.ceil(appointments.length / itemsPerPage);
    const filteredAppointments = appointments.filter((appointment) => {
        return (
            (!filters.doctor || appointment.doctor_name.toLowerCase().includes(filters.doctor.toLowerCase())) &&
            (!filters.date || appointment.date_time.startsWith(filters.date))
        );
    });
    const paginatedAppointments = filteredAppointments.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="p-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-6 text-white">Healthcare Appointment Dashboard</h1>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
                <FilterBar />
                <AppointmentList appointments={paginatedAppointments} />
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </div>
        </div>
    );
};

export default App
