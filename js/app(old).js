// const text = "Hello, world!";
// const text = document.querySelector(".filter").textContent;
// const textArray = text.split(" ");

// const random = Math.round(Math.random() * textArray.length);

// console.log(random);

// textArray.splice(random, 0, "WORD");
// const newText = textArray.join(" ");

// document.querySelector(".filter").textContent = newText;

// console.log(newText);
// ========================================

// const text = document.querySelector(".filter").innerHTML;
// const textArray = text.split("</");
// console.log(textArray);

// const text = document.querySelector(".filter").innerText;

// String.prototype.splice = function (idx, rem, str) {
// 	return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
// };

// var result = text.splice(4, 0, "WORD ");

// console.log(result);

// document.querySelector(".filter").innerText = result;

// function findOrder() {
// 	var orderlist = [...document.getElementsByClassName("filter")];
// 	console.log(Array.isArray(orderlist));
// 	for (var i = 0; i < orderlist.length; i++) {
// 		var nl = orderlist[i].innerHTML;
// 		console.log(nl);
// 	}
// }
// findOrder();

// const testerArray = [].slice.call(document.querySelector(".filter").innerHTML);
// const random = Math.round(Math.random() * testerArray.length);

// testerArray.splice(random, 0, "WORD");

// console.log(testerArray.splice(random, 0, "WORD"));

// let txt = "Hello, world!";
// // let txt = document.querySelector(".filter").innerText;

// const random = Math.round(Math.random() * txt.length);

// const txtArr = txt.split();
// txtArr.splice(random, 0, "WORD ");

// txt = txtArr.join("");

// console.log(txt);

// const randomP1 = Math.floor(Math.random() * text1.length) + 1;
// const randomP2 = Math.floor(Math.random() * text2.length) + 1;
// const randomP3 = Math.floor(Math.random() * text3.length) + 1;

//=========================================
const replace = (selectors, randomP, numWord) => {
	selectors.forEach((item, index) => {
		if (randomP == index + 1) {
			const textArray = item.textContent.split(" ");
			const random = Math.round(Math.random() * textArray.length);

			textArray.splice(random, 0, arrayWords[numWord]);
			item.textContent = textArray.join(" ");

			// setTimeout(() => {
			// 	textArray.splice(random, 1);
			// 	item.textContent = textArray.join(" ");
			// }, 2000);

			// setInterval(() => {
			// 	setTimeout(() => {
			// 		textArray.splice(random, 1);
			// 		item.textContent = textArray.join(" ");
			// 	}, 2000);

			// 	setTimeout(() => {
			// 		textArray.splice(random, 0, arrayWords[numWord]);
			// 		item.textContent = textArray.join(" ");
			// 	}, 100);
			// }, 2100);
		}
	});
};

// const reset = (selectors) => {
// 	selectors.forEach((item) => {
// 		item.textContent = item.textContent.replace("WORD 1", "");
// 		item.textContent = item.textContent.replace("WORD 2", "");
// 		item.textContent = item.textContent.replace("WORD 3", "");
// 	});
// };

const randomP = (text) => {
	return Math.floor(Math.random() * text.length) + 1;
};

const text1 = document.querySelectorAll("#tab-1 p");
const text2 = document.querySelectorAll("#tab-2 p");
const text3 = document.querySelectorAll("#tab-3 p");

const list1 = document.querySelectorAll("#tab-1 li");
const list2 = document.querySelectorAll("#tab-2 li");
const list3 = document.querySelectorAll("#tab-3 li");
// const arrayWords = ["ци", "фро", "вой", "ри", "су", "нок"];
// const arrayWords = ["1", "2", "3", "4", "5", "6"];
const arrayWords = ["WORD 1", "WORD 2", "WORD 3"];

const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};
shuffleArray(arrayWords);

replace(text1, randomP(text1), 0);
replace(text2, randomP(text2), 1);
replace(text3, randomP(text3), 2);

let regexp = new RegExp("(" + arrayWords.join("|") + ")", "ig");
$("p").each(function (num, elem) {
	let text = $(elem).text();
	text = text.replace(regexp, '<span class="highlight">$&</span>');
	$(elem).html(text);
});

// setTimeout(() => {
// 	reset(text1);
// 	reset(text2);
// 	reset(text3);
// }, 2000);
//==================================
// setInterval(() => {
// 	setTimeout(() => {
// 		reset(text1);
// 		reset(text2);
// 		reset(text3);
// 	}, 2000);

// 	setTimeout(() => {
// 		shuffleArray(arrayWords);

// 		replace(text1, randomP(text1), 0);
// 		replace(text2, randomP(text2), 1);
// 		replace(text3, randomP(text3), 2);

// 		let regexp = new RegExp("(" + arrayWords.join("|") + ")", "ig");
// 		$("p").each(function (num, elem) {
// 			let text = $(elem).text();
// 			text = text.replace(regexp, '<span class="highlight">$&</span>');
// 			$(elem).html(text);
// 		});
// 	}, 100);
// }, 2100);
//==================================

// (function () {
// 	return document.querySelector("#tab-1 p").textContent.replace("WORD", "");
// })();
// setInterval(() => {
// 	shuffleArray(arrayWords);

// 	replace(text1, randomP(text1), 0);
// 	replace(text2, randomP(text2), 1);
// 	replace(text3, randomP(text3), 2);

// 	let regexp = new RegExp("(" + arrayWords.join("|") + ")", "ig");
// 	$("p").each(function (num, elem) {
// 		let text = $(elem).text();
// 		text = text.replace(regexp, '<span class="highlight">$&</span>');
// 		$(elem).html(text);
// 	});
// }, 4000);

//============================================
// function addRemoveClass() {
// 	var element = document.querySelector(".section"); // выбираем элемент, которому нужно добавить/удалить класс

// 	setInterval(function () {
// 		element.classList.add("new-class"); // добавляем класс

// 		setTimeout(function () {
// 			element.classList.remove("new-class"); // удаляем класс через 10 минут
// 		}, 2000); // 10 минут в миллисекундах

// 		setTimeout(function () {
// 			element.classList.add("new-class"); // добавляем класс через 5 минут
// 		}, 1000); // 5 минут в миллисекундах
// 	}, 3000); // 15 минут в миллисекундах (10 минут + 5 минут)
// }

// addRemoveClass(); // вызываем функцию для запуска
