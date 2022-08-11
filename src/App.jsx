import { BrowserRouter } from "react-router-dom";
import { GlobalStyle, StyledToastContainer } from "./styles/global";
import "react-toastify/dist/ReactToastify.min.css";

import PageRoutes from "./routes/PageRoutes";
import Providers from "./providers/index.js";

function App() {
  return (
    <>
      <StyledToastContainer />
      <GlobalStyle />
      <Providers>
        <BrowserRouter>
          <PageRoutes />
        </BrowserRouter>
      </Providers>
    </>

    // verificar se os valores do providers estão todos sendo usados.
    //usar useRef pra fechar o modal clicando fora
    //passar o id pra funcao de clique
  );
}

export default App;
