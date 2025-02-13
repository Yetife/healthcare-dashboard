import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../redux/appointmentsSlice";

const FilterBar = () => {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.appointments.filters);

    const handleFilterChange = (e) => {
        dispatch(setFilters({ ...filters, [e.target.name]: e.target.value }));
    };

    return (
        <div className="flex md:flex-row flex-col gap-4 p-4">
            <input
                type="text"
                name="doctor"
                placeholder="Filter by Doctor"
                className="border bg-blue-200 rounded-xl p-2"
                value={filters.doctor}
                onChange={handleFilterChange}
            />
            <input
                type="date"
                name="date"
                className="border bg-blue-200 p-2 rounded-xl"
                value={filters.date}
                onChange={handleFilterChange}
            />
        </div>
    );
};

export default FilterBar;