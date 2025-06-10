
import { useVoteMain } from "../hooks/useVoteMain";

export function Smile({src, id}) {
    const {incrementCount, count} = useVoteMain(id)
    return ( 
        <div className="smile-item" onClick={()=>{incrementCount(count)}}>
                <img src={src} alt={`${id} smile img`}></img>
                <p className="item-progres">
                    {id !== 'crown' ? count : ''}
                </p>
            </div>
    );
};