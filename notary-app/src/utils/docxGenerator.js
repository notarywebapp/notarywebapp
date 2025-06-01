import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';

export default async function generateDocx(templateData) {
  const sections = templateData.map(({ templateName, fields }) => {
    const content = generateContent(templateName, fields);

    return {
      properties: {},
      children: [
        new Paragraph({
          children: [
            new TextRun({ text: templateName, bold: true, size: 28 }),
          ],
          spacing: { after: 200 },
        }),
        new Paragraph({
          children: [
            new TextRun({ text: content, size: 24 }),
          ],
        }),
        new Paragraph({ text: "" }),
      ],
    };
  });

  const doc = new Document({
    creator: "Notary App",
    title: "Generated Legal Documents",
    description: "Multiple documents exported by the admin",
    sections, // ✅ now passing sections directly here
  });

  try {
    const blob = await Packer.toBlob(doc);
    saveAs(blob, "Notary_Documents.docx");
  } catch (err) {
    alert("Failed to generate document. Check console for errors.");
    console.error("docx error:", err);
  }
}

function generateContent(templateName, fields) {
  const replacements = {
    "إقرار": `I, ${fields["Full Name"] || "___"}, hereby declare this statement on ${fields["Date"] || "___"} in ${fields["City"] || "___"}.`,
    "وكالة عامة": `I, ${fields["Principal Name"] || "___"}, grant general power of attorney to ${fields["Agent Name"] || "___"} to handle ${fields["Scope"] || "___"}.`,
    "عقد بيع": `This is to confirm that ${fields["Seller"] || "___"} sold ${fields["Item"] || "___"} to ${fields["Buyer"] || "___"} for the amount of ${fields["Amount"] || "___"}.`,
    "عقد إيجار": `${fields["Lessor"] || "___"} agrees to lease ${fields["Property"] || "___"} to ${fields["Lessee"] || "___"} for ${fields["Duration"] || "___"} at a rent of ${fields["Rent"] || "___"}.`,
  };
  return replacements[templateName] || "Template not recognized.";
}

