import { PositionName } from "./PositionName";

export class Candidates 
{
    constructor(
        public candidate_id:number,
        public first_name:String,
        public last_name:String,
        public candidate_photo:String,
        public party_photo:String,
        public position_name:PositionName
    )
    {

    }
}
