import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Mock data with 20 appointments and real patient names
const patientNames = [
    "John Doe", "Jane Smith", "Alice Johnson", "Robert Brown", "Emily Davis",
    "Michael Wilson", "Sophia Martinez", "Daniel Anderson", "Olivia Thomas", "James White",
    "Charlotte Harris", "Benjamin Martin", "Amelia Robinson", "Henry Clark", "Mia Lewis",
    "William Walker", "Evelyn Young", "Alexander King", "Harper Hall", "Lucas Allen"
];

const clinicNames = [
    "Sunshine Hospital", "Downtown Health Center", "Evergreen Medical", "Oceanview Clinic", "Harmony Care",
    "Maplewood Medical", "Lakeside Wellness", "Central City Clinic", "Pinecrest Health", "Riverbend Hospital",
    "Summit Medical", "Grand Oak Hospital", "Cedar Park Clinic", "Blue Ridge Health", "Golden Valley Care",
    "Silver Pine Medical", "Horizon Health Center", "Crystal Springs Clinic", "Bright Horizon Medical", "Willow Creek Health"
];


const mockAppointments = patientNames.map((name, i) => {
    const day = String((i % 28) + 1).padStart(2, "0"); // Ensure two-digit day
    const hour = String(i % 24).padStart(2, "0"); // Ensure two-digit hour
    const dateTime = `2025-02-${day}T${hour}:00:00`; // Correct ISO format

    return {
        id: i + 1,
        patient_name: name,
        doctor_name: `Dr. ${['Smith', 'Brown', 'Williams', 'Jones', 'Davis'][i % 5]}`,
        date_time: dateTime, // Now in proper format
        clinic_location: clinicNames[i],
    };
});


export const fetchAppointments = createAsyncThunk("appointments/fetch", async () => {
    return new Promise((resolve) => setTimeout(() => resolve(mockAppointments), 1000));
});

const appointmentsSlice = createSlice({
    name: "appointments",
    initialState: { list: [], selected: null, filters: { doctor: "", date: "" }, status: "idle", error: null },
    reducers: {
        setFilters: (state, action) => { state.filters = action.payload; },
        selectAppointment: (state, action) => { state.selected = action.payload; },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAppointments.pending, (state) => { state.status = "loading"; })
            .addCase(fetchAppointments.fulfilled, (state, action) => { state.status = "succeeded"; state.list = action.payload; })
            .addCase(fetchAppointments.rejected, (state, action) => { state.status = "failed"; state.error = action.error.message; });
    },
});

export const { setFilters, selectAppointment } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;