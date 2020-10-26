export const storeInitialState = data => ({
    type: "STATE_STORED",
    payload: { data }
});

export const changeBlocks = toDelete => ({
    type: "CLICK_HANDLED",
    payload: { toDelete }
});