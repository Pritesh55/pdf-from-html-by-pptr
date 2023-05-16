import MyFile from "../MyFile";


export default function About() {
    return (
        <>

            <main className="w-full h-screen p-5">
                <a href="/api/pdf" target='_blank' download="generated_pdf.pdf" className="downloadBtn z-50 text-3xl border-2 border-orange-400">
                    Download
                </a>
            </main>

        </>
    )
}
