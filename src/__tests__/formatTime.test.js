const { formatTime } = require("../utils/timeUtils.js");
import { test, expect } from "@jest/globals";


test("formats time correctly", () => {
    expect(formatTime("2025-02-10T14:00")).toBe("2:00 PM");
    expect(formatTime("2025-02-12T09:30")).toBe("9:30 AM");
    expect(formatTime("2025-02-12T00:15")).toBe("12:15 AM");
});
