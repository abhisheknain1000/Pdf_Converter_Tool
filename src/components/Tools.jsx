import { Archive, Droplet, Edit,  File,  FilePlus, FileText, FileTextIcon, Globe,  HashIcon, Image, Layers2, LucideNotepadText, Merge, MousePointerClick, NotepadTextDashed, RotateCcw, Scan, Search, Settings2, Sheet, Shield, Signature, Split, Unlock } from "lucide-react";

const Tool = () => {
    const ToolsHref = [
        {
          name: "Merge PDF",
          description: "Combine PDFs in the order you want with the easiest PDF merger available.",
          icon: <Merge />,
          href: "https://www.ilovepdf.com/merge_pdf"
        },
        {
          name: "Split PDF",
          description: "Separate one page or a whole set for easy conversion into independent PDF files.",
          icon: <Split />,
          href: "https://www.ilovepdf.com/split_pdf"
        },
        {
          name: "Compress PDF",
          icon:<Layers2 />,
          description: "Reduce file size while optimizing for maximal PDF quality.",
          href: "https://www.ilovepdf.com/compress_pdf"
        },
        {
          name: "PDF to Word",
          description: "Easily convert your PDF files into easy to edit DOC and DOCX documents.",
          icon: <File/>,
          href: "https://www.ilovepdf.com/pdf_to_word"
        },
        {
          name: "PDF to PowerPoint",
          description: "Turn your PDF files into easy to edit PPT and PPTX slideshows.",
          icon: <FilePlus />,
          href: "https://www.ilovepdf.com/pdf_to_powerpoint"
        },
        {
          name: "PDF to Excel",
          description: "Pull data straight from PDFs into Excel spreadsheets in a few short seconds.",
          icon: <Sheet/>,
          href: "https://www.ilovepdf.com/pdf_to_excel"
        },
        {
          name: "Word to PDF",
          description: "Make DOC and DOCX files easy to read by converting them to PDF.",
          icon: <FileTextIcon />,
          href: "https://www.ilovepdf.com/word_to_pdf"
        },
        {
          name: "Excel to PDF",
          description: "Make EXCEL spreadsheets easy to read by converting them to PDF.",
          icon:<FileText />,
          href: "https://www.ilovepdf.com/excel_to_pdf"
        },
        {
          name: "Edit PDF",
          description: "Add text, images, shapes or freehand annotations to a PDF document.",
          icon: <Edit />,
          href: "https://www.ilovepdf.com/edit-pdf"
        },
        {
          name: "PDF to JPG",
          description: "Convert each PDF page into a JPG or extract all images contained in a PDF.",
          icon: <Image />,
          href: "https://www.ilovepdf.com/pdf_to_jpg"
        },
        {
          name: "Sign PDF",
          description: "Sign yourself or request electronic signatures from others.",
          icon: <Signature />,
          href: "https://www.ilovepdf.com/sign-pdf"
        },
        {
          name: "Watermark",
          description: "Stamp an image or text over your PDF in seconds. Choose the typography, transparency and position.",
          icon: <Droplet />,
          href: "https://www.ilovepdf.com/pdf_add_watermark"
        },
        {
          name: "HTML to PDF",
          description: "Convert webpages in HTML to PDF. Copy and paste the URL of the page you want and convert it to PDF with a click.",
          icon: <Globe />,
          href: "https://www.ilovepdf.com/html-to-pdf"
        },
        {
          name: "Unlock PDF",
          description: "Remove PDF password security, giving you the freedom to use your PDFs as you want.",
          icon: <Unlock />,
          href: "https://www.ilovepdf.com/unlock_pdf"
        },
        {
          name: "Organize PDF",
          icon:<LucideNotepadText />,
          description: "Sort pages of your PDF file however you like. Delete pdf also. Easily get when needed.",
          href: "https://www.ilovepdf.com/organize-pdf"
        },
        {
          name: "PDF to PDF/A",
          description: "Transform your PDF to PDF/A, the ISO-standardized version of PDF for long-term archiving.",
          icon: <Archive />,
          href: "https://www.ilovepdf.com/convert-pdf-to-pdfa"
        },
        {
          name: "Rotate PDF",
          description: "Rotate your PDFs the way you need them. You can even rotate multiple PDFs at once!",
          icon: <RotateCcw />,
          href: "https://www.ilovepdf.com/rotate_pdf"
        },
        {
          name: "Repair PDF",
          description: "Repair a damaged PDF and recover data from corrupt PDF. Fix PDF files with our Repair tool.",
          icon: <Settings2 />,
          href: "https://www.ilovepdf.com/repair-pdf"
        },
        {
          name: "Protect PDF",
          description: "Protect PDF files with a password. Encrypt PDF documents to prevent unauthorized access.",
          icon: <Shield />,
          href: "https://www.ilovepdf.com/protect-pdf"
        },
      
        {
          name: "Redact PDF",
          description: "Redact text and graphics to permanently remove sensitive information from a PDF. Better to redact it.",
          icon: <HashIcon/>,
          href: "https://www.ilovepdf.com/redact-pdf"
        },
        {
          name: "Page numbers",
          description: "Add page numbers into PDFs with ease. Choose your positions, dimensions, typography.",
          icon: <NotepadTextDashed/>,
          href: "https://www.ilovepdf.com/page-numbers"
        },
        {
          name: "Scan to PDF",
          description: "Capture document scans from your mobile device and send them instantly to your browser.",
          icon: <Scan />,
          href: "https://www.ilovepdf.com/scan-pdf"
        },
        {
          name: "OCR PDF",
          description: "Easily convert scanned PDFs into searchable and selectable documents. Easily do OCR.",
          icon: <Search />,
          href: "https://www.ilovepdf.com/ocr-pdf"
        }
      ];
    
    return (
      <section className="px-6 text-gray-600 body-font border-neutral-800"  id='tools'>
        <div className="container py-16 lg:py-20 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h3 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PDF TOOLS</h3>
            <h2 className="px-2 text-neutral-900 font-medium bg-clip-text text-2xl lg:text-5xl text-center tracking-widest">Enhance Your <span className='bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text'> PDF Workflow</span></h2>
          </div>
          <div className="flex flex-wrap mt-12 lg:mt-20">
            {ToolsHref.map((tool, index) => (
              <div key={index} className="p-2 w-full md:w-1/2 lg:w-1/3 px-4 py-4">
                <div className="flex rounded-lg h-full  p-8 flex-col group hover:shadow-2xl transition-all bg-secondBackgroundColor hover:bg-white">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full  text-primaryColor flex-shrink-0 group-hover:scale-110 transition-all">
                    {tool.icon?tool.icon:""}
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">{tool.name}</h2>
                  </div>
                  <div className="flex-grow text-base flex flex:nowrap flex-col">
                    <p className="leading-relaxed text-base pl-2">{tool.description}</p>
                    <a href={tool.href} className="text-indigo-500 font-bold group hover:text-indigo-700 mt-4">
                      <span className="inline-flex pl-2">Try Now &nbsp; <MousePointerClick className="group-hover:text-secondaryColor" /></span> 
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Tool;
