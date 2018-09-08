export const UPDATE_BASE25 = 'UPDATE_BASE25'
export const UPDATE_BASE30 = 'UPDATE_BASE30'
export const UPDATE_BASE35 = 'UPDATE_BASE35'
export const UPDATE_SAUCEWHITE = 'UPDATE_SAUCEWHITE'
export const UPDATE_SAUCERED = 'UPDATE_SAUCERED'
export const UPDATE_SAUCEMIX = 'UPDATE_SAUCEMIX'
export const UPDATE_TOPPINGPINE = 'UPDATE_TOPPINGPINE'
export const UPDATE_TOPPINGCORN = 'UPDATE_TOPPINGCORN'
export const UPDATE_TOPPINGOLIV = 'UPDATE_TOPPINGOLIV'
export const UPDATE_TOPPINGONION = 'UPDATE_TOPPINGONION'
export const UPDATE_TOPPINGSPIN = 'UPDATE_TOPPINGSPIN'
export const UPDATE_TOPPINGCHER = 'UPDATE_TOPPINGCHER'
export const DRONE_PRICE = 'DRONE_PRICE'
export const TOTAL_PRICE = 'TOTAL_PRICE'
           
 
export function updateBase25(bases) {
    return({
            type: UPDATE_BASE25,
            payload: bases
        })
}

export function updateBase30(bases) {
    return({
           type: UPDATE_BASE30,
           payload: bases
       })
}

export function updateBase35(bases) {
    return({
            type: UPDATE_BASE35,
            payload: bases
        })
}
export function updateSauceWhite(sauces) {
    return({
            type: UPDATE_SAUCEWHITE,
            payload: sauces
        })
}

export function updateSauceRed(sauces) {
    return({
           type: UPDATE_SAUCERED,
           payload: sauces
       })
}

export function updateSauceMix(sauces) {
    return({
            type: UPDATE_SAUCEMIX,
            payload: sauces
        })
}

export function updateToppingPine(toppings) {
    return({
            type: UPDATE_TOPPINGPINE,
            payload: toppings
        })
}

export function updateToppingCorn(toppings) {
    return({
            type: UPDATE_TOPPINGCORN,
            payload: toppings
        })
}

export function updateToppingOliv(toppings) {
    return({
            type: UPDATE_TOPPINGOLIV,
            payload: toppings
        })
}

export function updateToppingOnion(toppings) {
    return({
            type: UPDATE_TOPPINGONION,
            payload: toppings
        })
}

export function updateToppingSpin(toppings) {
    return({
            type: UPDATE_TOPPINGSPIN,
            payload: toppings
        })
}

export function updateToppingCher(toppings) {
    return({
            type: UPDATE_TOPPINGCHER,
            payload: toppings
        })
}
export function dronePrice() {
    return({
        type: DRONE_PRICE,
    })
}
export function totalPrice() {
    return({
        type: TOTAL_PRICE,
    })
}

