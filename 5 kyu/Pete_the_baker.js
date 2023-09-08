/**
 * https://www.codewars.com/kata/525c65e51bf619685c000059
 */

function cakes(recipe, available) {
    console.log("recipe = ", recipe);
    console.log("available = ", available);

    let count = Infinity;
    for (r in recipe) {
        if (!available[r]) return 0;
        let howMany = Math.floor(available[r] / recipe[r]);
        if (howMany < count) count = howMany;
    }
    return (count === Infinity) ? 0 : count;
}