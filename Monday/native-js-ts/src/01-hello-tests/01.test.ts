import {multiply, splitToWords, sum} from "./01";

test('sum should be correct', () => { // 2 arguments - name of test and function with three phases: 1)data; 2)action; 3)expect;
	//data
	const a = 1;
	const b = 2;
	const c = 3;
	//action
	const result1 = sum(a, b);
	const result2 = sum(b, c);
	const result3 = sum(a, c);
	//expect
	expect(result1).toBe(3);
	expect(result2).toBe(5);
	expect(result3).toBe(4);
}); // yarn start

test('result should be correct', () => {
	//data
	const a = 3;
	const b = 4;
	const c = 5;
	//action
	const result4 = multiply(a, b);
	const result5 = multiply(b, c);
	const result6 = multiply(a, c);
	//expect
	expect(result4).toBe(12);
	expect(result5).toBe(20);
	expect(result6).toBe(15);
});

test("splitting the sentence to words should be correct", () => {
	const sentence = "Hello my friend";

	const result1 = splitToWords(sentence);

	expect(result1.length).toBe(3);
	expect(result1[0]).toBe("Hello");
	expect(result1[1]).toBe("my");
	expect(result1[2]).toBe("friend");
});