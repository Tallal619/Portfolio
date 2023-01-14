/** @format */

import { memo } from "react";

const PdfRender = React.memo(({ invoiceData }) => {
  return (
    invoiceData?.pdfUrl && (
      <Document
        renderMode="svg"
        file={{
          url: invoiceData?.pdfUrl,
        }}
      >
        <Page pageNumber={1} />
      </Document>
    )
  );
});
