export const randomSecondIntervalSleep = async (min: number, max: number) => {
    const random = Math.random() * (max - min) + min;
    await sleep(random)
}

export const sleep = function (ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms * 1000));
};