import { useDesserts } from "../hooks/useDesserts";
import { DessertCard } from "./DessertCard";

export const DessertsGrid = () => {
  const { cards, loading } = useDesserts();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
      {cards.map((dessert) => (
        <DessertCard data={dessert} key={dessert.name} />
      ))}
    </div>
  );
};
