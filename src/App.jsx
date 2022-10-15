import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StateProvider } from "../context/StateContext";
import Form from "./components/form/Form";
import Home from "./pages/Home";
function App() {
  return (
    <StateProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Home />} />
          <Route path="/" element={<Form />} />
          <Route path="*" element={<h1>404</h1>} />
          
        </Routes>
      </BrowserRouter>
    </StateProvider>
  )
}
export default App