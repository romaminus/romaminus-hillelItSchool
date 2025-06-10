
import { Smile } from "./Smile";
// import { imageMap } from "../App";
import { imageMap } from "../path/path";
import { useVoteMain } from "../hooks/useVoteMain";

export function Winner({id}) {
    const {findWinner, value, ident} = useVoteMain()
    return (
        <>
            <button className="btn" onClick={findWinner}>
                show results
            </button>
            <div className="winner-wrapper">
                <h2>Vote result:</h2>
                <h3>winner</h3>
                <Smile src={imageMap[ident]} id={id}></Smile>
                <p className="vote-num">number of votes: {value}</p>
            </div>
        </>
    )
};