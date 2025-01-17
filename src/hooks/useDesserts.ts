import { useEffect, useState } from "react";
import mockData from "../assets/mock/desserts.json";
import { DessertData } from "../types/dessert";

const fetchMockData = (): Promise<DessertData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 1000); // Simula 1 segundo de retraso
  });
};

type UseDessertsResult = {
  cards: DessertData[];
  loading: boolean;
};

export const useDesserts = (): UseDessertsResult => {
  const [cards, setCards] = useState<DessertData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMockData();
        setCards(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    cards,
    loading,
  };
};
