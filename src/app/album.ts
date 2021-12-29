import { Track } from './track';

export interface Album {
    name:string;
    releasedate:string;
    coverImage:string;
    tracks :Track[];

}
