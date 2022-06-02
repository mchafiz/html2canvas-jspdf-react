import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import PDFContent from "./PDFContent";

function App() {
  const exportPdf = () => {
    const input = document.getElementById("aadc");
    html2canvas(input, {
      logging: true,
      useCORS: true,
    }).then((canvas) => {
      var imgData = canvas.toDataURL("image/png");
      var imgWidth = 210;
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;

      var doc = new jsPDF("p", "mm", "a4");
      var position = 0;

      doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight + 10);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight + 10);
        heightLeft -= pageHeight;
      }
      doc.save("Dashboard.pdf");
    });
  };
  return (
    <div className="App">
      <button
        onClick={() => {
          exportPdf();
        }}
      >
        print PDF
      </button>
      <header id="aadc">
        <PDFContent />
      </header>
    </div>
  );
}

export default App;
