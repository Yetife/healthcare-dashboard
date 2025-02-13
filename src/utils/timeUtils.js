export const formatTime = (dateTime) => {
    const [datePart, timePart] = dateTime.split("T");
    if (!timePart) return "Invalid Time"; // Handle missing time data

    let [hours, minutes] = timePart.split(":").map(Number);
    const amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 24-hour to 12-hour format

    return `${hours}:${minutes.toString().padStart(2, "0")} ${amPm}`;
};
