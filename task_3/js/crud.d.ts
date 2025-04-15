// Ambient file containing the type declarations for each crud function.
import { RowID, RowElement } from "./interface";

export function insertRow(row: any): number;
export function deleteRow(rowId: number): void;
export function updateRow(rowId: number, row: any): number;
