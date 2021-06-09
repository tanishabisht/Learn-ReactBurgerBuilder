export const updateState = (oldObj, updatedState) => {
    return {
        ...oldObj,
        ...updatedState
    }
}