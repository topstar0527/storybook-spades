import data from './mockStatuses.json';

export default () => {
    return new Promise((resolve) => {
        resolve(data);
    });
};
