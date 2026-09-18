import { expect, test } from "vitest";
import Tag from "../src/tag";

test("render single tag", () => {
  expect(new Tag("br").toString()).toBe('<br>');
});

test("render single tag with attribute", () => {
  expect(new Tag("img", { src: "path/to/image" }).toString()).toBe('<img src="path/to/image">');
});

test("render single tag with attributes", () => {
  expect(new Tag("input", { type: "submit", value: "Save" }).toString()).toBe('<input type="submit" value="Save">');
});

test("render pair tag with text", () => {
  expect(new Tag("label", {}, "Email").toString()).toBe('<label>Email</label>');
});

test("render pair tag with text and attributes", () => {
  expect(new Tag("label", { for: "email" }, "Email").toString()).toBe('<label for="email">Email</label>');
});

test("render empty pair tag", () => {
  expect(new Tag("div").toString()).toBe('<div></div>');
});

