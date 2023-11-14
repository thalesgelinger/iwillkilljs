

type BigType = {
    a: {
        b: {
            c: number
        }
    },
    d: {
        e: {
            g: number
        },
        f: number
    }
}

type FlattenKeys<T, Prefix = ''> = T extends object
  ? {
      [K in keyof T]: FlattenKeys<T[K], `${Prefix}${"" extends Prefix ? "" : "."}${K}`> | `${Prefix}${"" extends Prefix ? "" : "."}${K}`;
    }[keyof T]
  : Prefix;

type AllKeys = FlattenKeys<BigType>

const t = (k: AllKeys) => {

}

t("")


