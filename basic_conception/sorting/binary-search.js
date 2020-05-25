// 二分查找
function binarySearch(A, x) {
	let l = 0; // 左边界
	let r = A.length - 1; // 右边界
	let guess; // 猜测位置
	while (l <= r) {
		guess = Math.floor((l + r) / 2);
		// 循环不变式
		// guess等于l，r中间位置
		// l查找范围左，r查找范围右
		if (A[guess] === x) return guess;
		else if (A[guess] > x) r = guess - 1;
		else l = guess + 1;
		// 循环不变式
		// l:新查找范围左，r:新查找范围右
	}
	return -1;
}

const arr = [3, 5, 18, 22, 25, 33, 45, 47, 57, 66, 71, 78];

// console.log(binarySearch(arr, 88));
// console.log(binarySearch(arr, 68));
// console.log(binarySearch(arr, 22));

// 函数柯里化，减少传参
// 第一种方式
function bSearch(A) {
	return function (x) {
		let l = 0; // 左边界
		let r = A.length - 1; // 右边界
		let guess; // 猜测位置
		while (l <= r) {
			guess = Math.floor((l + r) / 2);
			// 循环不变式
			// guess等于l，r中间位置
			// l查找范围左，r查找范围右
			if (A[guess] === x) return guess;
			else if (A[guess] > x) r = guess - 1;
			else l = guess + 1;
			// 循环不变式
			// l:新查找范围左，r:新查找范围右
		}
		return -1;
	};
}

const newBSearch = bSearch(arr);
console.log(newBSearch(88));
console.log(newBSearch(68));
console.log(newBSearch(22));

// 第二种方式，不改变原函数，将函数变为柯里化函数
function curry(fn, arr = []) {
	let len = fn.length;
	return (...args) => {
		let params = [...arr, ...args];
		if (params.length < len) {
			return curry(fn, params);
		}
		return fn(...params);
	};
}

const newBSearch2 = curry(binarySearch)(arr);

console.log(newBSearch2(88));
console.log(newBSearch2(68));
console.log(newBSearch2(22));
