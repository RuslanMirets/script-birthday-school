const text1 = document.querySelectorAll("#tab-1 p");
const text2 = document.querySelectorAll("#tab-2 p");
const text3 = document.querySelectorAll("#tab-3 p");
const text4 = document.querySelectorAll("#tab-4 p");
const text5 = document.querySelectorAll("#tab-5 p");
const text6 = document.querySelectorAll("#tab-6 p");

const list1 = document.querySelectorAll("#tab-1 li");
const list2 = document.querySelectorAll("#tab-2 li");
const list3 = document.querySelectorAll("#tab-3 li");
// const arrayWords = ["ци", "фро", "вой", "ри", "су", "нок"];
const arrayWords = ["WORD 1", "WORD 2", "WORD 3", "WORD 4", "WORD 5", "WORD 6"];

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
			}, 2000);
		}
	});
};

shuffleArray(arrayWords);

replace(text1, 0);
replace(text2, 1);
replace(text3, 2);

let regexp = new RegExp("(" + arrayWords.join("|") + ")", "ig");
$("p").each(function (num, elem) {
	let text = $(elem).text();
	text = text.replace(regexp, '<span class="highlight">$&</span>');
	$(elem).html(text);
});

setInterval(() => {
	setTimeout(() => {
		shuffleArray(arrayWords);

		replace(text1, 0);
		replace(text2, 1);
		replace(text3, 2);

		let regexp = new RegExp("(" + arrayWords.join("|") + ")", "ig");
		$("p").each(function (num, elem) {
			let text = $(elem).text();
			text = text.replace(regexp, '<span class="highlight">$&</span>');
			$(elem).html(text);
		});
	}, 100);
}, 2100);
