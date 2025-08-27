const breadcrumbs = ["Home", "Products", "Electronics", "Laptops"];

const breadcrumb = breadcrumbs.reduceRight((acc, item) => {
    return acc ? `${item} > ${acc}`: item 
}, "")


console.log(breadcrumb)
// Home > Products > Electronics > Laptops

// basically, reduce, but right to left. usefull when orders matter.