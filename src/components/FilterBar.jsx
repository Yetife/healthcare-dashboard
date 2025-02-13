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
            <div>
                <p className="pb-2 md:text-xl text-base">Filter by doctor</p>
                <input
                    type="text"
                    name="doctor"
                    placeholder="Filter by Doctor"
                    className="border bg-blue-200 rounded-xl p-2 w-full"
                    value={filters.doctor}
                    onChange={handleFilterChange}
                />
            </div>

            <div className="md:w-4/12 w-full">
                <p className="pb-2  md:text-xl text-base">Filter by date</p>
                <input
                    type="date"
                    name="date"
                    className="border bg-blue-200 p-2 rounded-xl w-full"
                    value={filters.date}
                    onChange={handleFilterChange}
                />
            </div>

        </div>
    );
};

export default FilterBar;