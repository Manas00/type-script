export function showDestructuring() {
    function displayValues(title: string, ...values: any[]) {
        console.log(title,":")
        console.log(values);
    }

    let array = ["abc", 123, "def", 456];
    let object = {
        property1: "wibble",
        property2: 12345,
        property3: "wobble",
        property4: 67890
    };

    let [var1, var2, var3, var4] = array;
    let [var5, var6, ...var7] = array;

    displayValues('Destructuring arrays', var1, var2, var3, var4, var5, var6, var7);

    let {property1, property2, property3, property4} = object;
    let {
        property1: var8, property2: var9,
        property3: var10, property4: var11
    } = object;

    displayValues('Destructuring objects', property1, property2, property3,
        property4, var8, var9, var10, var11);
}
