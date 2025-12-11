export interface Tool {
  id: number;
  name: string;
  description: string;
  version: string;
  type: 'language' | 'framework' | 'library' | 'tool';
  isPopular: boolean;
  logoUrl: string;
  detailedDescription: string;
  documentationUrl: string;
  creator: string;
  communityRating: number;
  releaseYear: number;
}
