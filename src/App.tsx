import MatrixTable from "./components/MatrixTable/MatrixTable";
import MatrixContextWrapper from "./contextWrappers/MatrixContextWrapper";
import "./App.css";

function App() {
  return (
    <MatrixContextWrapper>
      <MatrixTable />
    </MatrixContextWrapper>
  );
}

export default App;
