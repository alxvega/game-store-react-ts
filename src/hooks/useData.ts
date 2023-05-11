import { useState, useEffect } from "react";
import { AxiosRequestConfig, CanceledError } from "axios";

import { Game, Genre, Platform } from "./useData-types";
import apiClient from "../services/api-client";
import { GameQuery } from "../App";

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

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
): Data<T> => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);
      apiClient
        .get<ApiResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
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
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.orderBy,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

export const useGenres = (): Data<Genre> => useData<Genre>("/genres");

export const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
