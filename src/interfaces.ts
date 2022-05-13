export type locationType = [
    number, number]

export interface pointsProps  {
    
    title: string,
    text: string,
    date: number ,
    location: locationType
};

  export interface locationProps {
        locationHandler: (lat: number, lng: number) => void }


export interface IProvider {
    points: pointsProps[],
    addPointHandler: (title : string, text : string, location : locationType) => void
}