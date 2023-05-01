import { useState, useEffect } from "react";
import { Game, Genre } from "../services/response-types";
import { CanceledError } from "axios";
import apiClient from "../services/api-client";

interface ApiResponse<T> {
  count: number;
  next?: string;
  previous?: string;
  results: T[];
}

type Data<T> = {
  data: T[];
  error: string | null;
  isLoading: boolean;
};

const useData = <T>(endpoint: string): Data<T> => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<ApiResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};

export const useGames = (): Data<Game> => useData<Game>("/games");

export const useGenres = (): Data<Genre> => useData<Genre>("/genres");
