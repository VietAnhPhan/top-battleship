import { Ship } from "../src/Ship";
import { Carrier } from "../src/ships/Carrier";
import { Destroyer } from "../src/ships/Destroyer";

test("Ship:", () => {
  const carrier = new Carrier();
  const destroyer = new Destroyer();
  const destroyer2 = new Destroyer();
  expect(destroyer2.id).toBe("destroyer1");
});
