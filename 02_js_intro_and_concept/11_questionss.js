

// ===============================
// JAVASCRIPT TYPE CONVERSION
// ===============================

// 1
console.log("25" + 5);
console.log(typeof ("25" + 5));

// Answer:
// 255
// string


// 2
console.log("25" - 5);
console.log(typeof ("25" - 5));

// Answer:
// 20
// number


// 3
console.log("8" * "4");
console.log(typeof ("8" * "4"));

// Answer:
// 32
// number


// 4
console.log("100" / "5");
console.log(typeof ("100" / "5"));

// Answer:
// 20
// number


// 5
console.log("15" % 4);
console.log(typeof ("15" % 4));

// Answer:
// 3
// number


// 6
console.log("5" ** 2);
console.log(typeof ("5" ** 2));

// Answer:
// 25
// number


// 7
console.log(true + 10);
console.log(typeof (true + 10));

// Answer:
// 11
// number


// 8
console.log(false + false);
console.log(typeof (false + false));

// Answer:
// 0
// number


// 9
console.log(true + true);
console.log(typeof (true + true));

// Answer:
// 2
// number


// 10
console.log("100" + true);
console.log(typeof ("100" + true));

// Answer:
// 100true
// string


// 11
console.log("100" - true);
console.log(typeof ("100" - true));

// Answer:
// 99
// number


// 12
console.log(null + 20);
console.log(typeof (null + 20));

// Answer:
// 20
// number


// 13
console.log(null * 5);
console.log(typeof (null * 5));

// Answer:
// 0
// number


// 14
console.log(undefined + 10);
console.log(typeof (undefined + 10));

// Answer:
// NaN
// number


// 15
console.log(undefined * 5);
console.log(typeof (undefined * 5));

// Answer:
// NaN
// number


// 16
console.log(Number("250"));
console.log(typeof Number("250"));

// Answer:
// 250
// number


// 17
console.log(Number("25.75"));
console.log(typeof Number("25.75"));

// Answer:
// 25.75
// number


// 18
console.log(Number("abc"));
console.log(typeof Number("abc"));

// Answer:
// NaN
// number


// 19
console.log(parseInt("450px"));
console.log(typeof parseInt("450px"));

// Answer:
// 450
// number


// 20
console.log(parseFloat("99.99kg"));
console.log(typeof parseFloat("99.99kg"));

// Answer:
// 99.99
// number


// 21
console.log(String(150));
console.log(typeof String(150));

// Answer:
// "150"
// string


// 22
console.log(String(true));
console.log(typeof String(true));

// Answer:
// "true"
// string


// 23
console.log(Boolean(1));
console.log(typeof Boolean(1));

// Answer:
// true
// boolean


// 24
console.log(Boolean(0));
console.log(typeof Boolean(0));

// Answer:
// false
// boolean


// 25
console.log(Boolean("JavaScript"));
console.log(typeof Boolean("JavaScript"));

// Answer:
// true
// boolean

// 26
console.log(Boolean(""));
console.log(typeof Boolean(""));

// Answer:
// false
// boolean


// 27
console.log(Boolean(" "));
console.log(typeof Boolean(" "));

// Answer:
// true
// boolean


// 28
console.log(Boolean(null));
console.log(typeof Boolean(null));

// Answer:
// false
// boolean


// 29
console.log(Boolean(undefined));
console.log(typeof Boolean(undefined));

// Answer:
// false
// boolean


// 30
console.log(Boolean(NaN));
console.log(typeof Boolean(NaN));

// Answer:
// false
// boolean


// 31
console.log(+"100");
console.log(typeof (+"100"));

// Answer:
// 100
// number


// 32
console.log(-"75");
console.log(typeof (-"75"));

// Answer:
// -75
// number


// 33
console.log(+"25.5");
console.log(typeof (+"25.5"));

// Answer:
// 25.5
// number


// 34
console.log(+"Hello");
console.log(typeof (+"Hello"));

// Answer:
// NaN
// number


// 35
console.log("15" + null);
console.log(typeof ("15" + null));

// Answer:
// 15null
// string


// 36
console.log("15" - null);
console.log(typeof ("15" - null));

// Answer:
// 15
// number


// 37
console.log("15" * null);
console.log(typeof ("15" * null));

// Answer:
// 0
// number


// 38
console.log("15" / null);
console.log(typeof ("15" / null));

// Answer:
// Infinity
// number


// 39
console.log("20" + undefined);
console.log(typeof ("20" + undefined));

// Answer:
// 20undefined
// string


// 40
console.log("20" - undefined);
console.log(typeof ("20" - undefined));

// Answer:
// NaN
// number


// 41
console.log("20" * undefined);
console.log(typeof ("20" * undefined));

// Answer:
// NaN
// number


// 42
console.log("20" / undefined);
console.log(typeof ("20" / undefined));

// Answer:
// NaN
// number


// 43
console.log("5" + false);
console.log(typeof ("5" + false));

// Answer:
// 5false
// string


// 44
console.log("5" - false);
console.log(typeof ("5" - false));

// Answer:
// 5
// number


// 45
console.log("8" * true);
console.log(typeof ("8" * true));

// Answer:
// 8
// number


// 46
console.log("8" / false);
console.log(typeof ("8" / false));

// Answer:
// Infinity
// number


// 47
let a = "50" + 10;
console.log(a);
console.log(typeof a);

// Answer:
// 5010
// string


// 48
let b = "50" - 10;
console.log(b);
console.log(typeof b);

// Answer:
// 40
// number


// 49
let c = Number("600");
console.log(c);
console.log(typeof c);

// Answer:
// 600
// number


// 50
let d = String(false);
console.log(d);
console.log(typeof d);

// Answer:
// false
// string

// 51
console.log("25" == 25);
console.log(typeof ("25" == 25));

// Answer:
// true
// boolean


// 52
console.log("25" === 25);
console.log(typeof ("25" === 25));

// Answer:
// false
// boolean


// 53
console.log(false == 0);
console.log(typeof (false == 0));

// Answer:
// true
// boolean


// 54
console.log(false === 0);
console.log(typeof (false === 0));

// Answer:
// false
// boolean


// 55
console.log(null == undefined);
console.log(typeof (null == undefined));

// Answer:
// true
// boolean


// 56
console.log(null === undefined);
console.log(typeof (null === undefined));

// Answer:
// false
// boolean


// 57
console.log("" == false);
console.log(typeof ("" == false));

// Answer:
// true
// boolean


// 58
console.log("" === false);
console.log(typeof ("" === false));

// Answer:
// false
// boolean


// 59
console.log("0" == false);
console.log(typeof ("0" == false));

// Answer:
// true
// boolean


// 60
console.log("0" === false);
console.log(typeof ("0" === false));

// Answer:
// false
// boolean


// 61
console.log([] == false);
console.log(typeof ([] == false));

// Answer:
// true
// boolean


// 62
console.log([1] == 1);
console.log(typeof ([1] == 1));

// Answer:
// true
// boolean


// 63
console.log([2] == "2");
console.log(typeof ([2] == "2"));

// Answer:
// true
// boolean


// 64
console.log([] == "");
console.log(typeof ([] == ""));

// Answer:
// true
// boolean


// 65
console.log([10] + 5);
console.log(typeof ([10] + 5));

// Answer:
// 105
// string


// 66
console.log([] + 10);
console.log(typeof ([] + 10));

// Answer:
// 10
// string


// 67
console.log({} + 5);
console.log(typeof ({} + 5));

// Answer:
// "[object Object]5"
// string


// 68
console.log(Number(true));
console.log(typeof Number(true));

// Answer:
// 1
// number


// 69
console.log(Number(false));
console.log(typeof Number(false));

// Answer:
// 0
// number


// 70
console.log(Number(null));
console.log(typeof Number(null));

// Answer:
// 0
// number


// 71
console.log(Number(""));
console.log(typeof Number(""));

// Answer:
// 0
// number


// 72
console.log(Number(" "));
console.log(typeof Number(" "));

// Answer:
// 0
// number


// 73
console.log(Number("0x10"));
console.log(typeof Number("0x10"));

// Answer:
// 16
// number


// 74
console.log(parseInt("0075"));
console.log(typeof parseInt("0075"));

// Answer:
// 75
// number


// 75
console.log(parseFloat("45.678cm"));
console.log(typeof parseFloat("45.678cm"));

// Answer:
// 45.678
// number


// 76
console.log(String(null));
console.log(typeof String(null));

// Answer:
// "null"
// string


// 77
console.log(String(undefined));
console.log(typeof String(undefined));

// Answer:
// "undefined"
// string


// 78
console.log(String(NaN));
console.log(typeof String(NaN));

// Answer:
// "NaN"
// string


// 79
console.log(String(Infinity));
console.log(typeof String(Infinity));

// Answer:
// "Infinity"
// string


// 80
console.log(Boolean([]));
console.log(typeof Boolean([]));

// Answer:
// true
// boolean


// 81
console.log(Boolean({}));
console.log(typeof Boolean({}));

// Answer:
// true
// boolean


// 82
let a = +"250";
console.log(a);
console.log(typeof a);

// Answer:
// 250
// number


// 83
let b = +"25.75";
console.log(b);
console.log(typeof b);

// Answer:
// 25.75
// number


// 84
let c = +"Hello";
console.log(c);
console.log(typeof c);

// Answer:
// NaN
// number


// 85
let d = +"";
console.log(d);
console.log(typeof d);

// Answer:
// 0
// number


// 86
let e = +" ";
console.log(e);
console.log(typeof e);

// Answer:
// 0
// number


// 87
console.log(+"20" + 30);
console.log(typeof (+"20" + 30));

// Answer:
// 50
// number


// 88
console.log("20" + +30);
console.log(typeof ("20" + +30));

// Answer:
// 2030
// string


// 89
console.log(+"40" - "10");
console.log(typeof (+"40" - "10"));

// Answer:
// 30
// number


// 90
console.log(+"8" * "5");
console.log(typeof (+"8" * "5"));

// Answer:
// 40
// number


// 91
console.log(+"100" / "4");
console.log(typeof (+"100" / "4"));

// Answer:
// 25
// number


// 92
console.log("50" + false);
console.log(typeof ("50" + false));

// Answer:
// "50false"
// string


// 93
console.log("50" - false);
console.log(typeof ("50" - false));

// Answer:
// 50
// number


// 94
console.log("50" * false);
console.log(typeof ("50" * false));

// Answer:
// 0
// number


// 95
console.log("50" / false);
console.log(typeof ("50" / false));

// Answer:
// Infinity
// number


// 96
let f = Number("999");
console.log(f + 1);
console.log(typeof (f + 1));

// Answer:
// 1000
// number


// 97
let g = parseInt("123abc");
console.log(g * 2);
console.log(typeof (g * 2));

// Answer:
// 246
// number


// 98
let h = parseFloat("10.5kg");
console.log(h + 1.5);
console.log(typeof (h + 1.5));

// Answer:
// 12
// number


// 99
let i = String(500);
console.log(i + 100);
console.log(typeof (i + 100));

// Answer:
// "500100"
// string


// 100
let j = Boolean("JavaScript");
console.log(j + 5);
console.log(typeof (j + 5));

// Answer:
// 6
// number