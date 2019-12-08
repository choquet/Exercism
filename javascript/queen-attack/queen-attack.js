const arrayEqual = (arr1, arr2) => JSON.stringify(arr1) == JSON.stringify(arr2)

export class QueenAttack {
    constructor({white, black} = {white: [0, 3], black: [7, 3]}) {
        if (arrayEqual(white, black)){
            throw new Error('Queens cannot share the same space')
        }
        this.white = white
        this.black = black
    }

    toString() {
        let string = ''
        for(let i = 0 ; i < 8 ; i++) {
            for (let j = 0; j < 8; j++) {
                if (arrayEqual([i, j], this.white)) string += 'W'
                else if (arrayEqual([i, j], this.black)) string += 'B'
                else string += '_'

                if(j<7) string += ' '
                else string += '\n'
            }
        }
        return string
    }

    canAttack() {

        // same row
        if (this.black[0] == this.white[0]) return true
        
        // same column
        if (this.black[1] == this.white[1]) return true
        
        // same diag NW/SE
        if (this.black[1] - this.white[1] == this.black[0] - this.white[0]) return true

        // same diag NE/SW
        if (this.black[1] - this.white[1] == this.white[0] - this.black[0]) return true

        return false
    }
}
