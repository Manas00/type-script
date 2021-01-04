import * as R from 'ramda'

export function sanityCheck() : string {
    const words = ["<span class='bg-success'>","It", "all", "works!","</span>"];
    return R.reduce((a, b) => `${a} ${b}`,'', words);
}
