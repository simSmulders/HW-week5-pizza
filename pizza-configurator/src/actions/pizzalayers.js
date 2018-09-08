export const UPDATE_BASE25 = 'UPDATE_BASE25'
export const UPDATE_BASE30 = 'UPDATE_BASE30'
export const UPDATE_BASE35 = 'UPDATE_BASE35'

 
export function updateBase25(bases) {
    return(
        {
            type: UPDATE_BASE25,
            payload: bases
        }
    )
}

export function updateBase30(bases) {
    return(
       {
           type: UPDATE_BASE30,
           payload: bases
       }
    )
}

export function updateBase35(bases) {
    return(
        {
            type: UPDATE_BASE35,
            payload: bases
        }
    )
}

