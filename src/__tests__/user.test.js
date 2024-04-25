import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Home from "../components/Home";
import { username, city, image } from "../data/user"; // Importing the variables correctly

test("username, city, and image are all exported", () => {
  // Check if username, city, and image are defined
  expect(username).toBeDefined(); 
  expect(city).toBeDefined(); 
  expect(image).toBeDefined(); 

  // Add the expectation for the specific value of username
  expect(username).toEqual("Liza");
});


