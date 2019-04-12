export const ADD = 'ADD'
export const MINUS = 'MINUS'
export const RESET = 'RESET'

export function addCount() {
    return {type: ADD}
}
export function minusCount() {
    return {type: MINUS}
}
export function resetCount() {
    return {type: RESET}
}