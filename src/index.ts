import { MikroORM } from "@mikro-orm/core";
import { __prod__  } from "./constants";
import { Post } from "./entities/Post";

(async () => {
    const orm = await MikroORM.init({
        entities: [Post],
        dbName: "app",
        type: "postgresql",
        debug: !__prod__
    });

    const post = orm.em.create(Post, { title: "my first post" });

    console.log(post)
})()

console.log("hello there");