import { parseCSV } from "../src/basic-parser";
import * as path from "path";
import { z, ZodError } from "zod";

const FRUIT_CSV_PATH = path.join(__dirname, "../data/fruits.csv");
const ANIMALS_CSV_PATH = path.join(__dirname, "../data/animals.csv");
const PEOPLE_CSV_PATH = path.join(__dirname, "../data/people.csv");

test("test zod schema parsing no errors", async () => {
    const results = await parseCSV(FRUIT_CSV_PATH, z.tuple([z.string(), z.string()]).transform((arr) => ({ fruit: arr[0], color: arr[1] })));
    
    expect(results).toHaveLength(3);
    expect(results[0]).toEqual({ fruit: "apple", color: "red" });
    expect(results[1]).toEqual({ fruit: "banana", color: "yellow" });
    expect(results[2]).toEqual({ fruit: "raspberry", color: "pink" });
})

test("test zod schema parsing with errors", async () => {
    expect(parseCSV(ANIMALS_CSV_PATH, z.tuple([z.string(), z.string()]).transform((arr) => ({ animal: arr[0], color: arr[1] })))).rejects.toBeInstanceOf(ZodError);
})

test("wrong schema type", async () => {
    expect(parseCSV(PEOPLE_CSV_PATH, z.tuple([z.string(), z.number()]).transform((arr) => ({ name: arr[0], age: arr[1] })))).rejects.toBeInstanceOf(ZodError);
})