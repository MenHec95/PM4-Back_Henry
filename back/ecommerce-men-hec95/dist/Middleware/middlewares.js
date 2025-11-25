"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerMiddleware = LoggerMiddleware;
function LoggerMiddleware(req, res, next) {
    console.log(`Metodo ${req.method} utilizado en Ruta ${req.url} el dia: ${new Date().toLocaleDateString()}. A las ${new Date().toLocaleTimeString()}`);
    next();
}
//# sourceMappingURL=middlewares.js.map