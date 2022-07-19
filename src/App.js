import LeftSideBar from "./layout/LeftSiderBar";
import ErrorBoundary from "./ErrorBoundry/ErrorBoundry";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <LeftSideBar />
      </ErrorBoundary>
    </div>
  );
}

export default App;
