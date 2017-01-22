export const ActionTypes = {
    STARTED_UPDATING: 'STARTED_UPDATING',
    UPDATED: 'UPDATED'
};

export class AsyncApi {
    static getFieldValue() {
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(Math.floor(Math.random() * 100));
            }, 1000);
        });
        return promise;
    }
}