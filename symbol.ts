//const gmify = <T extends object>(gmiKey: string[], obj: T) => {
//    console.log({ gmiKey })
//    return {
//        ...obj,
//        get: () => {
//            console.log({gmiKey});
//            return {} as T;
//        },
//        set: (value: T) => {
//            console.log({value})
//        }
//    }
//
//}
//
//const stateFull = {
//    gmi: gmify(["gmi"], {
//        gma: gmify(["gmi", "gma"], {
//            fetching: gmify(["gmi", "gma", "fetching"],{
//                a: {
//                    b: 10
//                }
//            })
//        })
//    }),
//    app: {
//        is: {},
//        appOutage: false
//    }
//};
//
//console.log(stateFull.gmi.gma.get())


const state = {
    gmi: {
        gma: {
            fetching: {
                a: {
                    b: 10
                }
            }
        }
    },
    app: {
        is: {},
        appOutage: false
    }
};






//const get = (keys: string[], fallback: any) => {
//    return {
//        keys,
//        fallback
//    }
//}
//
//const set = (keys: string[], value: any) => {
//    console.log("SETTED", keys, value)
//}

type Proxify<T> = {
    [K in keyof T]: T[K] extends object ? Proxify<T[K]> & ProxyMethods<T[K]> : ProxyValue<T[K]>;
};

type ProxyValue<T> = {
    get(): T;
    set(value: T): void;
};

type ProxyMethods<T> = {
    get(): Proxify<T>;
    set(value: T): void;
};

function createProxy<T extends object>(obj: T, keys = [] as string[]): Proxify<T> {
    return new Proxy(obj, {
        get(target, prop: string) {
            //@ts-ignore
            const value = target[prop];
            const allKeys = [...keys, prop];
            if (typeof value === 'object') {
                const subProxy = createProxy(value, allKeys);
                return {
                    ...subProxy,
                    get() {
                        return subProxy;
                    },
                    set(value: any) {
                        set(allKeys, value);
                    }
                } as Proxify<T[Extract<keyof T, string>]>;
            }
            return {
                get() {
                    // state.getIn(allKeys, value)
                    return get(allKeys, value);
                },
                set(value: any) {
                    // state.setIn(allKeys, value)
                    set(allKeys, value);
                }
            } as ProxyValue<T[Extract<keyof T, string>]>;
        },
    }) as Proxify<T>;
}

const proxyState = createProxy(state)


//console.log(proxyState.gmi.gma.fetching.a.set({ b: 10 }))
//console.log(proxyState.gmi.gma.fetching.get())
//console.log(proxyState.gmi.gma.fetching.get())
//console.log(proxyState.gmi.gma.fetching.get())
//console.log(proxyState.gmi.gma.fetching.get())
//console.log(proxyState.gmi.gma.fetching.get())
//console.log(proxyState.gmi.gma.fetching.get())
//console.log(proxyState.gmi.gma.fetching.get())
//console.log(proxyState.gmi.gma.fetching.get())
//console.log(proxyState.gmi.gma.fetching.get())
//console.log(proxyState.gmi.gma.fetching.get())
//console.log(proxyState.gmi.gma.fetching.get())
//console.log(proxyState.gmi.gma.fetching.get())
//console.log(proxyState.gmi.gma.fetching.get())
//
//
