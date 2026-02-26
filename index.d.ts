export declare const isBool: (a: unknown) => a is boolean
export declare const equals: (a: boolean) => (b: boolean) => boolean
export declare const lte: (a: boolean) => (b: boolean) => boolean
export declare const lt: (a: boolean) => (b: boolean) => boolean
export declare const gte: (a: boolean) => (b: boolean) => boolean
export declare const gt: (a: boolean) => (b: boolean) => boolean
export declare const min: (a: boolean) => (b: boolean) => boolean
export declare const max: (a: boolean) => (b: boolean) => boolean
export declare const clamp: (
  lo: boolean,
) => (hi: boolean) => (x: boolean) => boolean
