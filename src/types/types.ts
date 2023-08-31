import { Dispatch, SetStateAction } from 'react';

export interface IGameCard {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}

export interface IGameDetails {
  id: number;
  title: string;
  thumbnail: string;
  status: string;
  short_description: string;
  description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
  minimum_system_requirements: IGameSystemRequirementsProps,
  screenshots: {
    id: number;
    image: string;
  }[];
}

export interface IScreenshotsCarouselProps {
  id: number;
  image: string;
}

export interface IGameSystemRequirementsProps {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}

export interface IDateFormatterProps {
  isDetails: boolean;
  dateString: string;
}

export interface GameListState {
  games: IGameCard[];
  loading: boolean;
  error?: string;
}

export interface IFilterParamsState {
  platform?: string,
  category?: string,
  sortBy?: string,
}

export interface IPaginationComponentProps {
  games: IGameCard[];
  total: number,
  onSetItemsToDisplay: Dispatch<SetStateAction<IGameCard[]>>,
}
