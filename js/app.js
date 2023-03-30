// Birthday script
jQuery(document).ready(function ($) {
	const text1 = $("#tab-1 p:not(:has(a))");
	const text2 = $("#tab-2 p:not(:has(a))");
	const text3 = $("#tab-3 p:not(:has(a))");
	const text4 = $("#tab-4 p:not(:has(a))");
	const text5 = $("#tab-5 p:not(:has(a))");
	const text6 = $("#tab-6 p:not(:has(a))");

	const linkInText1 = $("#tab-1 p a");
	const linkInText2 = $("#tab-2 p a");
	const linkInText3 = $("#tab-3 p a");
	const linkInText4 = $("#tab-4 p a");
	const linkInText5 = $("#tab-5 p a");
	const linkInText6 = $("#tab-6 p a");

	const list2 = $("#tab-2 ul li");
	const list3 = $("#tab-3 ul li");
	const list4 = $("#tab-4 ul li");

	const arrayWords = ["ци", "фро", "вой", "ри", "су", "нок"];

	const shuffleArray = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};

	const replace = (selectors, numWord) => {
		const randomP = Math.floor(Math.random() * selectors.length) + 1;

		selectors.each(function (index) {
			if (randomP == index + 1) {
				const text = $(this).text().split(" ");
				const randomIndex = Math.round(Math.random() * text.length);

				text.splice(
					randomIndex,
					0,
					"<span class='highlight'>" + arrayWords[numWord] + "</span>",
				);
				$(this).html(text.join(" "));

				setTimeout(() => {
					text.splice(randomIndex, 1);
					$(this).html(text.join(" "));
				}, 1000); // Change to 600000 ms
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

		setTimeout(start, 1000); // Change to 600000ms
	};
	start();
});

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
