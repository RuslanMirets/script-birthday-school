// const text1 = document.querySelectorAll("#tab-1 p:not(:has(a))");
const text1 = document.querySelectorAll("#tab-1 p:not(.links)");
const text2 = document.querySelectorAll("#tab-2 p:not(.links)");
const text3 = document.querySelectorAll("#tab-3 p:not(.links)");
const text4 = document.querySelectorAll("#tab-4 p:not(.links)");
const text5 = document.querySelectorAll("#tab-5 p:not(.links)");
const text6 = document.querySelectorAll("#tab-6 p:not(.links)");

const linkInText1 = document.querySelectorAll("#tab-1 p a");
const linkInText2 = document.querySelectorAll("#tab-2 p a");
const linkInText3 = document.querySelectorAll("#tab-3 p a");
const linkInText4 = document.querySelectorAll("#tab-4 p a");
const linkInText5 = document.querySelectorAll("#tab-5 p a");
const linkInText6 = document.querySelectorAll("#tab-6 p a");

const list2 = document.querySelectorAll("#tab-2 ul li");
const list3 = document.querySelectorAll("#tab-3 ul li");
const list4 = document.querySelectorAll("#tab-4 ul li");
const arrayWords = ["ци", "фро", "вой", "ри", "су", "нок"];
// const arrayWords = ["WORD 1", "WORD 2", "WORD 3", "WORD 4", "WORD 5", "WORD 6"];

const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};

const replace = (selectors, numWord) => {
	const randomP = Math.floor(Math.random() * selectors.length) + 1;

	selectors.forEach((item, index) => {
		if (randomP == index + 1) {
			const textArray = item.textContent.split(" ");
			const random = Math.round(Math.random() * textArray.length);

			textArray.splice(random, 0, arrayWords[numWord]);
			item.textContent = textArray.join(" ");

			setTimeout(() => {
				textArray.splice(random, 1);
				item.textContent = textArray.join(" ");
			}, 2000); // Change to 600000 ms
		}
	});
};

const start = () => {
	shuffleArray(arrayWords);

	Math.floor(Math.random() * 2) + 1 == 1
		? replace(text1, 0)
		: replace(linkInText1, 0);

	Math.floor(Math.random() * 3) + 1 == 1
		? replace(text2, 1)
		: Math.floor(Math.random() * 3) + 1 == 2
		? replace(list2, 1)
		: replace(linkInText2, 1);

	Math.floor(Math.random() * 3) + 1 == 1
		? replace(text3, 2)
		: Math.floor(Math.random() * 3) + 1 == 2
		? replace(list3, 2)
		: replace(linkInText3, 2);

	Math.floor(Math.random() * 3) + 1 == 1
		? replace(text4, 3)
		: Math.floor(Math.random() * 3) + 1 == 2
		? replace(list4, 3)
		: replace(linkInText4, 3);

	Math.floor(Math.random() * 2) + 1 == 1
		? replace(text5, 4)
		: replace(linkInText5, 4);

	Math.floor(Math.random() * 2) + 1 == 1
		? replace(text6, 5)
		: replace(linkInText6, 5);

	// Highlight
	let regexp = new RegExp(" (" + arrayWords.join("|") + ")", "ig");
	let regexp2 = new RegExp("(" + arrayWords.join("|") + ") ", "ig");
	const highlight = (selector) => {
		$(selector).each(function (num, elem) {
			let text = $(elem).text();
			text = text.replace(regexp, '<span class="highlight">$&</span>');
			text = text.replace(regexp2, '<span class="highlight">$&</span>');
			$(elem).html(text);
		});
	};
	highlight("p:not(.links)");
	highlight("li");
	highlight("p a");

	setTimeout(start, 3000); // Change to 900000 ms (10 min + 5 min)
};
start();

// Just timer
let i = 1;
const timer = () => {
	document.querySelector(".timer b").textContent = i++;
	setTimeout(timer, 1000);
};
timer();

// Server Datetime
// const surprise = (cb) => {
// 	(function loop() {
// 		var now = new Date();
// 		if (now.getSeconds() == 30) {
// 			cb();
// 		}
// 		now = new Date();
// 		var delay = 2100 - (now % 2100);
// 		setTimeout(loop, delay);
// 	})();
// };
// surprise(() => {
// 	console.log();
// });
