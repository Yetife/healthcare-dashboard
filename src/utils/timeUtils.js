export const formatTime = (dateTime) => {
    const [datePart, timePart] = dateTime.split("T");
    if (!timePart) return "Invalid Time"; // Handle missing time data

    let [hours, minutes] = timePart.split(":").map(Number);
    const amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 24-hour to 12-hour format

    return `${hours}:${minutes.toString().padStart(2, "0")} ${amPm}`;
};

export const formatDate = (dateString) => {
    if (!dateString) return ""; // Prevents errors if the value is undefined or empty

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return ""; // Prevents errors if the date is invalid

    return date.toISOString().split("T")[0]; // Ensures YYYY-MM-DD format
};
