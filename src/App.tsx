import { DessertsGrid } from "./components/DessertsGrid";
import { Resume } from "./components/resume/Resume";
import { ProductsProvider } from "./contexts/ProductsContext";

function App() {
  return (
    <ProductsProvider>
      <main className="mx-auto grid max-w-7xl gap-8 px-6 py-5 md:grid-cols-3 md:py-20">
        <section className="space-y-7 md:col-span-2">
          <h2 className="text-4xl font-bold text-rose-900">Desserts</h2>
          <DessertsGrid />
        </section>
        <section className="md:col-span-1">
          <Resume />
        </section>
      </main>
    </ProductsProvider>
  );
}

export default App;
