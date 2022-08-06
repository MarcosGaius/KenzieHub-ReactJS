import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./routes/PageRoutes";
import { GlobalStyle, StyledToastContainer } from "./styles/global";

import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <>
      <StyledToastContainer />
      <GlobalStyle />
      <BrowserRouter>
        <PageRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
