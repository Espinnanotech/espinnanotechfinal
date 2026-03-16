"use client";

import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";

export default function CataloguePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col mt-4">
      <Header />
      <div className="flex-1 flex flex-col pt-20">
        <div className="bg-red-500 py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
              Product Catalogue
            </h1>
            <p className="text-gray-300 text-center mt-2">
              E-SPIN NANOTECH — Complete Product Range
            </p>
          </div>
        </div>
        <div className="flex-1 w-full max-w-7xl mx-auto px-4 py-6">
          <iframe
            src="/catalogue.pdf"
            className="w-full rounded-lg shadow-lg border border-gray-200"
            style={{ height: "calc(100vh - 250px)", minHeight: "600px" }}
            title="E-SPIN NANOTECH Product Catalogue"
          />
          <div className="mt-4 text-center">
            <a
              href="/catalogue.pdf"
              download="E-SPIN_NANOTECH_Catalogue.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Catalogue
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
