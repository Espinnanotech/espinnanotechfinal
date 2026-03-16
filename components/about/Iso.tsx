"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FileIcon, DownloadIcon, EyeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import PDFViewer from "@/components/ui/pdf-viewer";

const certificates = [
  {
    name: "ISO 9001:2015",
    description: "Quality Management System",
    validUntil: "2025-12-31",
    fileUrl: "/pdf/iso90012015egacfinalcopy.pdf",
  },
  {
    name: "ISO 14001:2015",
    description: "Information Security Management",
    validUntil: "2025-12-31",
    fileUrl: "/pdf/iso140012015egacfinalcopy.pdf",
  },
  {
    name: "ISO 45001:2018",
    description: "Environmental Management System",
    validUntil: "2025-12-31",
    fileUrl: "/pdf/iso450012018egacfinalcopy.pdf",
  },
  {
    name: "ISO 13485:2016",
    description: "Environmental Management System",
    validUntil: "2025-12-31",
    fileUrl: "/pdf/ISO.pdf",
  },
  {
    name: "CE-4181",
    description: "Environmental Management System",
    validUntil: "2025-12-31",
    fileUrl: "/pdf/ESpinNanotechCC.pdf",
  },
  {
    name: "UQ-2023041725",
    description: "Environmental Management System",
    validUntil: "2025-12-31",
    fileUrl: "/pdf/ESPINNANOTECHWHOGMP.pdf",
  },
];

export function IsoFile() {
  const [selectedCertificate, setSelectedCertificate] = useState<{
    fileUrl: string;
    name: string;
  } | null>(null);

  return (
    <>
      {/* ISO Certificates Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                      <FileIcon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                    <p className="text-muted-foreground mb-4">
                      {cert.description}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Valid until:{" "}
                      {new Date(cert.validUntil).toISOString().split("T")[0]}
                    </p>
                    {/* <p className="text-sm text-muted-foreground mb-4">
                      Valid until: {new Date(cert.validUntil).toLocaleDateString()}
                    </p> */}
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() => setSelectedCertificate(cert)}
                      >
                        <EyeIcon className="mr-2 h-4 w-4" />
                        View
                      </Button>
                      {/* <Button variant="outline" className="flex-1" asChild>
                        <a href={cert.fileUrl} download>
                          <DownloadIcon className="mr-2 h-4 w-4" />
                          Download
                        </a>
                      </Button> */}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PDF Viewer Dialog */}
      {selectedCertificate && (
        <PDFViewer
          isOpen={!!selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
          fileUrl={selectedCertificate.fileUrl}
          title={selectedCertificate.name}
        />
      )}
    </>
  );
}
