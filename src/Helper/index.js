// Get the difference by years

export function getPriceYear(year) {
    return new Date().getFullYear()-year
}

// Get total according to the brand

export function calulateBrand(brand) {
    let increase;

    switch (brand) {
        case 'europeo':
            increase = 1.30;
            break
        case 'americano':
            increase = 1.15;
            break;
        case 'asiatico':
            increase = 1.05;
            break;
        default:
            break
    }
    return increase
}

//Calculate the type of insurance

export function getPlan(plan) {
    return ( plan === 'basic') ? 1.20 : 1.50
}

export function firstLetterUpperCase(text) {
    return text.charAt(0).toUpperCase()+ text.slice(1)
}