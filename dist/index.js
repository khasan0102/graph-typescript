"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const constants_1 = require("./constants");
(async () => {
    const orm = await core_1.MikroORM.init({
        dbName: "app",
        type: "postgresql",
        debug: !constants_1.__prod__
    });
    console.log(orm);
})();
console.log("hello there");
//# sourceMappingURL=index.js.map