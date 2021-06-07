let sayi1 = 10;
sayi1 = "Engin Demiroğ";
let student = { id: 1, name: "Engin" };
// console.log(student);

function save(puan = 10, ogrenci) {
    console.log(ogrenci.name + ": " + puan);
}

// save(undefined, student);

let students = ["Engin Demiroğ", "Murat Altınpınar", "Efe Özcan"];

// console.log(students);

let students2 = [student, { id: 2, name: "Mustafa" }, "Ankara", { city: "İstanbul" }, 10]

// console.log(students2);


//rest
//params
//varArgs
let showProducts = function (id, ...products) {
    console.log(id);
    console.log(products);
    // console.log(products[0]);
}

// console.log(typeof showProducts);
// showProducts(10,["Elma","Armut","Karpuz"])


// console.log(Math.max(1, 2, 3, 4, 5, 6, 13, 52, 363)); // ...values
// console.log(Math.max([1, 2, 3, 4, 5, 6, 13, 52, 363])); // NaN --> not a number problem


// spread
let points = [1, 2, 3, 4, 5, 6, 13, 52, 363];
// console.log(...points);
// console.log(Math.max(...points)); // 363
// console.log(Math.max(points)); // NaN
// console.log(..."ABC", "D", ..."EFG", "H"); // spread


// Destructing --> Array parçalama
let populations = [10000, 20000, 30000, [40000, 100000]];
let [small, medium, high, [veryHigh, maximum]] = populations;

// console.log(small);
// console.log(medium);
// console.log(high);
// console.log(veryHigh);
// console.log(maximum);

function someFunction([small1, medium2], number) {
    console.log(small1, medium2);
}

someFunction(populations); // --> 10000

let category = { id: 1, categoryName: "İçecek" };
// console.log(category.id);
// console.log(category['categoryName']);
// console.log(category.categoryName);

let { id, categoryName } = category;
// console.log(id);
// console.log(categoryName);
