const Scales = {
    mothers : [
        {
            CommonName : "Major",
            ScaleName : "Ionian",
            formula : [2, 2, 1, 2, 2, 2, 1],
            length: 7,
            hasMode: true
        },
        {
            ScaleName : "Double Harmonic Major",
            formula : [1, 3, 1, 2, 1, 3, 1],
            length: 7,
            hasMode: true
        },
        {
            ScaleName : "Melodic Minor",
            formula : [2, 1, 2, 2, 2, 2, 1],
            length: 7,
            hasMode: true
        },
        {
            ScaleName : "Harmonic Minor",
            formula : [2, 1, 2, 2, 1, 3, 1],
            length: 7,
            hasMode: true
        },
        {
            ScaleName : "Minor Pentatonic",
            formula : [3, 2, 2, 3, 2],
            length: 5,
            hasMode: false
        },
        {
            ScaleName : "Blues Pentatonic",
            formula : [3, 2, 1, 1, 3, 2],
            length: 6,
            hasMode: false
        },
        {
            ScaleName : "Bebop",
            formula : [2, 2, 1, 2, 2, 1, 1, 1],
            length: 8,
            hasMode: true
        },
        {
            ScaleName : "Half Step Whole Step",
            formula : [],
            length: 0,
            hasMode: false
        },
        {
            ScaleName : "Whole Step Half Step",
            formula : [],
            length: 0,
            hasMode: false
        }
    ]
}

export {Scales}