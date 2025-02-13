import "@testing-library/jest-dom";

// Ensure TextEncoder is available for React Router & Framer Motion
if (typeof global.TextEncoder === "undefined") {
    const { TextEncoder, TextDecoder } = require("node:util"); // Use "node:util" explicitly
    global.TextEncoder = TextEncoder;
    global.TextDecoder = TextDecoder;
}
