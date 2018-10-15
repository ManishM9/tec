import { VotingOption } from './VotingOption';

export interface Voting{
    title: string,
    description: string,
    createdby: string,
    createdbyname: string,
    options: VotingOption[],
    clearance: string,
}