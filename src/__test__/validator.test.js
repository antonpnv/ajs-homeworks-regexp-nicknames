import { Validator } from '../js/Validator';

test('Проверка имени пользователя, состоящее из заглавных букв, цифр и подчеркиваний.', () => {
	const user = new Validator('User99Av');
	expect(user.validateUsername()).toBe(true)
});

test('Проверка имени пользователя, начинающееся с цифры', () => {
	const user = new Validator('123username');
	expect(user.validateUsername()).toBe(false)
});

test('Проверка имени пользователя, состоящее только из цифр', () => {
	const user = new Validator('1_2_3');
	expect(user.validateUsername()).toBe(false)
});

test('Проверка имени пользователя, начинающееся с дефиса', () => {
	const user = new Validator('-username');
	expect(user.validateUsername()).toBe(false)
});

test('Проверка имени пользователя, начинающееся с подчеркивания', () => {
	const user = new Validator('_username');
	expect(user.validateUsername()).toBe(false)
});

test('Проверка имени пользователя со специальными символами', () => {
	const user = new Validator('user@name');
	expect(user.validateUsername()).toBe(false);
});

test('Проверяет допустимое имя пользователя со смешанными строчными и прописными буквами.', () => {
	const user = new Validator('MiXeDcAsE');
	expect(user.validateUsername()).toBe(true);
});