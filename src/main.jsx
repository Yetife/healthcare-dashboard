import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import AppointmentPage from "./pages/AppointmentPage";

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/appointment/:id" element={<AppointmentPage />} />
            </Routes>
        </Router>
    </Provider>,
)
