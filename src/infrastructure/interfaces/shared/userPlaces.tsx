export interface UserPlaces {
    src: string,
    therm?: string,
    title: string,
}
export interface MapsContentProps extends UserPlaces {
    src: string,
    therm?: string,
    title: string,
    isAList: boolean;

}