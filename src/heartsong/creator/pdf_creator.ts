import { PDFDocument, rgb, StandardFonts } from "pdf-lib"
import Logo from "@/assets/logo.png"

const DARK_RED = rgb(0.6, 0.1, 0.1)
const BLACK = rgb(0, 0, 0)
const WHITE = rgb(1, 1, 1)

export async function generateCharacterPDF(name: string, characterClass: string, calling: string, abilities: string): Promise<Uint8Array> {
    try {
        const pdfDoc = await PDFDocument.create()

        const page = pdfDoc.addPage([595.28, 841.89]) // A4 size
        const { width, height } = page.getSize()

        const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
        const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

        const columnWidth = width / 2
        const margin = 25
        const leftColumnX = margin
        const rightColumnX = width / 2 + margin

        // Logo
        const response = await fetch(Logo)
        const logoBytes = await response.arrayBuffer()
        const logoImage = await pdfDoc.embedPng(new Uint8Array(logoBytes))

        const logoWidth = columnWidth - margin * 2 // Fill the column width
        const logoHeight = (logoWidth * logoImage.height) / logoImage.width
        page.drawImage(logoImage, {
            x: leftColumnX,
            y: height - margin - logoHeight,
            width: logoWidth,
            height: logoHeight,
        })

        // Draw text fields in left column
        const textY = height - margin - logoHeight - 50
        const lineHeight = 20
        const fieldWidth = 200

        const form = pdfDoc.getForm()

        // Name
        page.drawText("Name:", {
            x: leftColumnX,
            y: textY,
            size: 12,
            font: boldFont,
            color: BLACK,
        })
        const nameField = form.createTextField("name")
        nameField.setText(name)
        nameField.addToPage(page, {
            x: leftColumnX + 60,
            y: textY - 12,
            width: fieldWidth,
            height: 20,
            borderWidth: 1,
            borderColor: BLACK,
            backgroundColor: WHITE,
        })

        // Class
        page.drawText("Class:", {
            x: leftColumnX,
            y: textY - lineHeight,
            size: 12,
            font: boldFont,
            color: BLACK,
        })
        const classField = form.createTextField("class")
        classField.setText(characterClass)
        classField.addToPage(page, {
            x: leftColumnX + 60,
            y: textY - lineHeight - 12,
            width: fieldWidth,
            height: 20,
            borderWidth: 1,
            borderColor: BLACK,
            backgroundColor: WHITE,
        })

        // Calling
        page.drawText("Calling:", {
            x: leftColumnX,
            y: textY - lineHeight * 2,
            size: 12,
            font: boldFont,
            color: BLACK,
        })
        const callingField = form.createTextField("calling")
        callingField.setText(calling)
        callingField.addToPage(page, {
            x: leftColumnX + 60,
            y: textY - lineHeight * 2 - 12,
            width: fieldWidth,
            height: 20,
            borderWidth: 1,
            borderColor: BLACK,
            backgroundColor: WHITE,
        })

        const abilitiesBoxY = height - margin - 100
        const abilitiesBoxHeight = 302

        page.drawRectangle({
            x: rightColumnX,
            y: abilitiesBoxY,
            width: columnWidth - margin * 2,
            height: 30,
            color: DARK_RED,
        })

        page.drawText("ABILITIES", {
            x: rightColumnX + 10,
            y: abilitiesBoxY + 8,
            size: 14,
            font: boldFont,
            color: WHITE,
        })

        const abilitiesField = form.createTextField("abilities")
        abilitiesField.enableMultiline()
        abilitiesField.setText(abilities)
        abilitiesField.addToPage(page, {
            x: rightColumnX + 1, // +1 for border offset
            y: abilitiesBoxY - abilitiesBoxHeight, // Moved down to avoid header overlap
            width: columnWidth - margin * 2 - 2, // -2 for border width
            height: abilitiesBoxHeight,
            borderWidth: 1,
            borderColor: BLACK,
            backgroundColor: WHITE,
        })

        return await pdfDoc.save()
    } catch (error) {
        console.error("Error in PDF generation:", { error })
        throw new Error(`Failed to generate PDF: ${error instanceof Error ? error.message : "Unknown error"}`)
    }
}
