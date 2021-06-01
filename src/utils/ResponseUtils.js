function reject(res, status, error) {
    res.status(status).json({
        error: error
    });
}

function resolve(res, status, result) {
    res.status(status).json({
        result: result
    });
}

export default {
    reject,
    resolve,
};