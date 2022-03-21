export interface AnimeResponse {
  data: AnimeResponseData[];
  links?: {
    first: string;
    last: string;
    next: string;
  };
  meta?: {
    count: number;
  };
}

export interface AnimeResponseData {
  id: string;
  type: string;
  attributes: Anime;
}

export interface Anime {
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly slug: string;
  readonly synopsis: string;
  readonly coverImageTopOffset: number;
  readonly titles: Titles;
  readonly canonicalTitle: string;
  readonly abbreviatedTitles: string[];
  readonly averageRating: string;
  readonly ratingFrequencies: RatingFrequencies;
  readonly userCount: number;
  readonly favoritesCount: number;
  readonly startDate: string;
  readonly endDate: string;
  readonly popularityRank: number;
  readonly ratingRank: number;
  readonly ageRating: string;
  readonly ageRatingGuide: string;
  readonly subtype: string;
  readonly status: string;
  readonly tba: string;
  readonly posterImage: PosterImage;
  readonly coverImage: PosterImage;
  readonly episodeCount: number;
  readonly episodeLength: number;
  readonly youtubeVideoId: string;
  readonly showType: string;
  readonly nsfw: boolean;
}

interface Titles {
  en: string;
  en_jp: string;
  ja_jp: string;
}

interface RatingFrequencies {
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
  13: string;
  14: string;
  15: string;
  16: string;
  17: string;
  18: string;
  19: string;
  20: string;
}

interface PosterImage {
  tiny: string;
  small: string;
  medium: string;
  large: string;
  original: string;
  meta: {
    dimensions: {
      tiny: {
        width: string;
        height: string;
      };
      small: {
        width: string;
        height: string;
      };
      medium: {
        width: string;
        height: string;
      };
      large: {
        width: string;
        height: string;
      };
    };
  };
}
