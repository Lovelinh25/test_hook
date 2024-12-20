// src/types.ts
export enum ActionTypes {
    SET_DOGS = "SET_DOGS",
    SELECTED_DOG = "SELECTED_DOG",
    REMOVE_SELECTED_DOG = "REMOVE_SELECTED_DOG"
}

export interface Dog {
    id: string;
    name: string;
    breed: string;
}

export interface SetDogsAction {
    type: ActionTypes.SET_DOGS;
    payload: Dog[];
}

export interface SelectedDogAction {
    type: ActionTypes.SELECTED_DOG;
    payload: Dog;
}

export interface RemoveDogAction {
    type: ActionTypes.REMOVE_SELECTED_DOG;
    payload: string; // Assuming you remove a dog by its ID
}

export type DogAction = SetDogsAction | SelectedDogAction | RemoveDogAction;
