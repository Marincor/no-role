import { Dispatch, SetStateAction } from "react";

export interface AnimationProps {
    animation?: boolean,
    openAnimation: (newValue: boolean) => void,
};