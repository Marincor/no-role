import { UserPlaces } from "../shared/userPlaces";

export interface ListContentProps {
    place: Array<UserPlaces>,
    loading: boolean,
    animation: boolean,
    openAnimation: (newValue: boolean) => void;
}