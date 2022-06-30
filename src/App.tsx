import "./App.css";
import { ProductCard } from "./components/product-card";

function App() {
  return (
    <div className="grid h-screen w-screen place-items-center bg-cream px-3 py-6">
      <ProductCard />
    </div>
  );
}

export default App;
