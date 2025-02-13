import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Mock data
// const mockAppointments = [
//     { id: 1, patient_name: "John Doe", doctor_name: "Dr. Smith", date_time: "2025-02-10", clinic_location: "City Clinic" },
//     { id: 2, patient_name: "Jane Doe", doctor_name: "Dr. Brown", date_time: "2025-02-12", clinic_location: "Metro Hospital" },
//     { id: 3, patient_name: "Alice Johnson", doctor_name: "Dr. Williams", date_time: "2025-02-15", clinic_location: "Downtown Medical Center" }
// ];
//
// export const fetchAppointments = createAsyncThunk("appointments/fetch", async () => {
//     return new Promise((resolve) => setTimeout(() => resolve(mockAppointments), 1000));
// });

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

const mockAppointments = patientNames.map((name, i) => ({
    id: i + 1,
    patient_name: name,
    doctor_name: `Dr. ${['Smith', 'Brown', 'Williams', 'Jones', 'Davis'][i % 5]}`,
    date_time: `2025-02-${(i % 28) + 1}T${(i % 24).toString().padStart(2, '0')}:00`,
    clinic_location: clinicNames[i],
}));

export const fetchAppointments = createAsyncThunk("appointments/fetch", async () => {
    return new Promise((resolve) => setTimeout(() => resolve(mockAppointments), 1000));
});

const appointmentsSlice = createSlice({
    name: "appointments",
    initialState: { list: [],
        selected: null,
        filters: { doctor: "", date: "" },
        status: "idle",
        error: null
    },
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