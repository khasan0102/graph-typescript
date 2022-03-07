// import { MikroORM } from "@mikro-orm/core";
// import { __prod__  } from "./constants";
// import { Post } from "./entities/Post";

// (async () => {
//     const orm = await MikroORM.init({
//         entities: [Post],
//         dbName: "app",
//         type: "postgresql",
//         debug: !__prod__
//     });

//     const post = orm.em.create(Post, { title: "my first post" });

//     console.log(post)
// })()


function Log (constructor: Function) {
    console.log(constructor)
}
 
function Log2(target: any, propName: string | Symbol) {
    console.log(target),
    console.log(propName)
}

function Log3(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
    console.log(target);
    console.log(propName);
    console.log(descriptor);
}

@Log
class Componet {
    @Log2
    name: string
    constructor(name: string) {
        this.name = name;
    }

    @Log3
    logName(): void {
        console.log(`Compenet Name: ${this.name}`)
    }
} 

console.log("hello there");