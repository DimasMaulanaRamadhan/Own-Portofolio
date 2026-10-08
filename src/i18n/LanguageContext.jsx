import { createContext } from "react";

// Context object dipisah agar file provider & hook bisa
// mengimpornya tanpa melanggar aturan react-refresh.
const LanguageContext = createContext(null);

export default LanguageContext;

