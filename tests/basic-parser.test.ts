import { parseCSV } from "../src/basic-parser";
import * as path from "path";

const PEOPLE_CSV_PATH = path.join(__dirname, "../data/people.csv");
const TESTER1_CSV_PATH = path.join(__dirname, "../data/tester1.csv");
const TESTER2_CSV_PATH = path.join(__dirname, "../data/tester2.csv");
const TESTER3_CSV_PATH = path.join(__dirname, "../data/tester3.csv");

test("parseCSV yields arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  
  expect(results).toHaveLength(5);
  expect(results[0]).toEqual(["name", "age"]);
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"]); // why does this work? :(
  expect(results[3]).toEqual(["Charlie", "25"]);
  expect(results[4]).toEqual(["Nim", "22"]);
});

test("parseCSV yields only arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  for(const row of results) {
    expect(Array.isArray(row)).toBe(true);
  }
});

test("field containing commas length test", async () => {
  const results = await parseCSV(TESTER1_CSV_PATH)
  
  expect(results).toHaveLength(2);
  expect(results[0]).toHaveLength(3);
  expect(results[1]).toHaveLength(3);
  //console.log(results[0]);
});

test("field containing commas content test", async () => {
  const results = await parseCSV(TESTER1_CSV_PATH)
  
  expect(results[0]).toEqual(["Caesar", "Julius", "veni, vidi, vici"]);
  expect(results[1]).toEqual(["hello, there", "hi", "bye"]);
});

test("field containing quotes test", async () => {
  const results = await parseCSV(TESTER2_CSV_PATH)

  expect(results[0]).toEqual(["\"hello\"", "\"there\""])
})

test("empty field test", async () => {
  const results = await parseCSV(TESTER3_CSV_PATH)

  expect(results[0]).toHaveLength(3);
  expect(results[0]).toEqual(["hello", "", "hi"]);
})
