export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  metacritic: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

export interface Genre {
  id: number;
  name: string;
  games_count: number;
  image_background: string;
}

export interface OrderBy {
  criteria: { value: string; label: string } | null;
}
