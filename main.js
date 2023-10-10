const axios = require('axios');

function forceMatch(validId, s, attemptsForSuccess) {
    if (s == 2**validId.length-attemptsForSuccess) {
        const newState = s-1;
        return {
            newId: validId,
            newState
        }
    }
}

function switchCapsLock(id, state) {
    let idArray = id.split("");
    const stateBin = state.toString(2);
    
    for (let i = 0; i < idArray.length; i++) {
        idArray[i] = stateBin[i] === '1' 
        ? idArray[i].toUpperCase()
        : idArray[i].toLowerCase();
    }
    
    const newId = idArray.join("");
    const newState = state-1;

    const match = forceMatch("3UB3z6fgDJw1A122BKc4sP", state, 5);
    // if (match) return match;

    return {
        newId, newState
    }
}

async function f(trackId) {
    let state = 2**trackId.length-1;
    let matchId = '';

    while (state >= 0 && matchId == '') {
        const {newId, newState} = switchCapsLock(trackId, state);
        
        await axios.get(`https://open.spotify.com/track/${newId}`)
        .then(response => {
                if (response.status == 200) {                    
                    console.log(`\nMATCH! id: ${newId}\n`);
                    matchId = newId;
                }
            })
            .catch(error => {
                console.error(state, error.response.status, newId);
            });

            state = newState;
    }
}

const trackId = "3UB3z6fgDJw1A122BKc4sP";
f(trackId);