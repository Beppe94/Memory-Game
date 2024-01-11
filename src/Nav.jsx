
function Nav({currentScore, bestScore}) {

    return (
        <div className="nav">
            <h1>Memory Game</h1>
            <div className="scores">
                <h2>Score: {currentScore}</h2>
                <h2>Best Score: {bestScore}</h2>
            </div>
        </div>
    )
}

export default Nav;