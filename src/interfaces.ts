export type locationType = [
    number, number]

export interface pointsProps  {
    
    title: string,
    text: string,
    date: string,
    location: locationType,
    id: number
};

  export interface locationProps {
        locationHandler: (lat: number, lng: number) => void }


export interface IProvider {
    points: pointsProps[],
    addPointHandler: (title : string, text : string, location : locationType) => void,
    deletePointHandler: (id: number) => void
}