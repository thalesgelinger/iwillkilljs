

type Fruits = "Mango" | "Apple" | "Lemon" | "Batata"


const guardFruits = (_: never) => {
    throw new Error("Invalid value")
}

const getKey = () => {
    return "Batata" as const;
}

const batata = getKey();

const switchFruits = (fruit: Fruits): void => {
    switch (fruit) {
        case "Mango":
            break;
        case "Apple":
            break;
        case "Lemon":
            break;
        case batata:
            break;
        default:
            const safeGuard: never = fruit;
            throw new Error("")
    }
}

switchFruits("Mango")


const getStr = (): string | undefined => {
    return
}

const raise = (msg: string): never => {
    throw new Error(msg)
}

const string: string | undefined = getStr()




const v = string ?? raise("deu ruim")


