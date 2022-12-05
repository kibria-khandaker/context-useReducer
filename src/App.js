import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import ProductProvider from './context/ProductProvider';

function App() {
  return (
    <div className="APP_JS_FILE">
      <ProductProvider>
        <RouterProvider router={routes} />
      </ProductProvider>
    </div>
  );
}

export default App;
