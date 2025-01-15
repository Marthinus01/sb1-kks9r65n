export interface Location {
  name: string;
  address: string;
  contacts: string[];
  isUpcoming: boolean;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Trailer {
  id: number;
  name: string;
  description: string;
  specifications: string[];
  imageUrl: string;
}