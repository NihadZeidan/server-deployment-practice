'use strict';

module.exports = (req, res, next) => {
    res.status(404).json({
        error: 'not Found',
        route: req.baseUrl
    });
}