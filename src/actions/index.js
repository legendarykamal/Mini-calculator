export const incNumber = (num) => {
    return {
        type: 'INCREMENT',
        payload: num
    }
}

export const decNumber = () => {
    return {
        type: 'DECREMENT'
    }
};
export const multi =(num)=>{
    return {
        type: 'MULTIPLY',
        payload: num
    }
}
export const divide =(num)=>{
    return {
        type: 'DIVIDE',
        payload: num
    }
}