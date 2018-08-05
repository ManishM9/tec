import { EventPerson } from "./EventPerson";

export interface Event{
    title: string,
    description: string,
    date: Date,
    speakers: EventPerson[],
    coordinators: EventPerson[],
    images?: string[],
}