// templates.js

const templates = [
  {
    name: "إقرار",
    fields: ["Full Name", "Date", "City"],
    content: "I, [Full Name], hereby declare this statement on [Date] in [City]."
  },
  {
    name: "وكالة عامة",
    fields: ["Principal Name", "Agent Name", "Scope"],
    content: "I, [Principal Name], grant general power of attorney to [Agent Name] to handle [Scope]."
  },
  {
    name: "عقد بيع",
    fields: ["Seller", "Buyer", "Item", "Amount"],
    content: "This is to confirm that [Seller] sold [Item] to [Buyer] for the amount of [Amount]."
  },
  {
    name: "عقد إيجار",
    fields: ["Lessor", "Lessee", "Property", "Duration", "Rent"],
    content: "[Lessor] agrees to lease [Property] to [Lessee] for [Duration] at a rent of [Rent]."
  }
];

export default templates;

