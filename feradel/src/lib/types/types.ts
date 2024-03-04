// $lib/types/types.ts

export interface Listing {
    // Define the properties of the Listing type
    status: string;
    title: string;
    location: string;
    agent: {
      name: string;
      image: string;
    };
    beds: number;
    garage: number;
    squareMeter: number;
    price: number;
    images: string[];
  }  