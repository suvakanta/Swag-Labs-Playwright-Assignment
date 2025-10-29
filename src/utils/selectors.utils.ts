// Bonus function is already in InventoryPage, but here's a utility if needed
// ...existing code...
export function getProductSelectorByName(productName: string): string {
  // escape backslashes and double quotes so the selector string remains valid
  const escaped = productName.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  return `.inventory_item:has(.inventory_item_name:has-text("${escaped}"))`;
}
// ...existing code...