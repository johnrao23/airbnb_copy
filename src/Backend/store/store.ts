import { create } from "zustand";

interface PriceItem {
  amount: number;
}

interface Price {
  rate: number;
  currency: string;
  total: number;
  priceItems: PriceItem[];
}

interface SearchResult {
  id: string;
  url: string;
  deeplink: string;
  position: number;
  name: string;
  bathrooms: number;
  bedrooms: number;
  beds: number;
  city: string;
  images: string[];
  hostThumbnail: string;
  isSuperhost: boolean;
  rareFind: boolean;
  lat: number;
  lng: number;
  persons: number;
  reviewsCount: number;
  rating: number;
  type: string;
  userId: number;
  address: string;
  amenityIds: number[];
  previewAmenities: string[];
  cancelPolicy: string;
  price: Price;
}

interface SearchResponse {
  error: boolean;
  headers: any; 
  results: SearchResult[];
}

interface SearchResults {
  results: SearchResponse;
  setResults: (results: SearchResponse) => void;
}

export interface User {
  id: string;
  name: string | null;
  email?: string | null;
  displayName?: string | null,
  twitterUsername?: string | null;
  githubUsername?: string | null;
  image?: string | null;
}

export interface AuthStore {
  user: User | null;
  setUser: (user: User) => void;
  isSignedIn: boolean;
  setIsSignedIn: (isSignedIn: boolean) => void;
  searchResults: SearchResults;
  selectedResult: SearchResult | null;
  setSelectedResult: (result: SearchResult) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isSignedIn: false,
  searchResults: {
    results: {error: false, headers: {}, results: []},
    setResults: (results) => set(state => ({ ...state, searchResults: { ...state.searchResults, results }})),
  },
  selectedResult: null,
  setSelectedResult: (result) => set({ selectedResult: result }),
  setUser: (user) => set({ user }),
  setIsSignedIn: (isSignedIn: boolean) => set({ isSignedIn })
}));