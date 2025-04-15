// Used to tell the TypeScript compiler about external files
// that contain type information (or declaration files).
/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud.js";

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
}
const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23
};
CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(newRowID);
