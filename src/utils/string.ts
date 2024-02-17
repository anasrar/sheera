export const capitalizeWord = (word: string) => {
	return word
		.split("")
		.map((char, i) => (i === 0 ? char.toUpperCase() : char))
		.join("");
};
