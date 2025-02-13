import React from "react";
import { test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import {formatTime} from "../utils/timeUtils.js";
import AppointmentList from "../components/AppointmentList.jsx";


const mockAppointments = [
    { id: 1, patient_name: "John Doe", doctor_name: "Dr. Smith", date_time: "2025-02-10T14:00", clinic_location: "Sunshine Hospital" },
    { id: 2, patient_name: "Jane Smith", doctor_name: "Dr. Brown", date_time: "2025-02-12T09:30", clinic_location: "Downtown Health Center" }
];

test("renders appointment list correctly", () => {
    render(<AppointmentList appointments={mockAppointments} />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Dr. Smith")).toBeInTheDocument();
    expect(screen.getByText("Sunshine Hospital")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
});


test("formats time correctly", () => {
    expect(formatTime("2025-02-10T14:00")).toBe("2:00 PM");
    expect(formatTime("2025-02-12T09:30")).toBe("9:30 AM");
    expect(formatTime("2025-02-12T00:15")).toBe("12:15 AM");
});