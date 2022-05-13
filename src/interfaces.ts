export interface pointsProps  {
    
    title: string,
    text: string,
    date: number | string,
    location: [number, number]
};

export type locationType = [
    number, number]

  export interface locationProps {
        locationHandler: (lat: number, lng: number) => void }