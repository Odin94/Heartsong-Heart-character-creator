import { PDFDocument, PDFTextField, rgb, setFontAndSize, StandardFonts } from "pdf-lib"
import Logo from "@/assets/logo.png"
import { Character } from "../game_data/character"

const DARK_RED = rgb(0.6, 0.1, 0.1)
const BLACK = rgb(0, 0, 0)
const WHITE = rgb(1, 1, 1)

export async function generateCharacterPDF(character: Character): Promise<Uint8Array> {
    try {
        const pdfDoc = await PDFDocument.create()

        const page = pdfDoc.addPage([595.28, 841.89]) // A4 size
        const { width, height } = page.getSize()

        const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
        const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

        // Add website URL in bottom right
        page.drawText("heartsong.odin-matthias.de", {
            x: width - 77,
            y: 5,
            size: 6,
            font: font,
            color: DARK_RED,
        })

        // Calculate column widths
        const columnWidth = width / 2
        const margin = 15
        const leftColumnX = margin
        const rightColumnX = width / 2 + margin / 2

        const form = pdfDoc.getForm()

        // Add resource tracks at the top of right column
        const trackStartY = height - margin - 30
        const trackSpacing = 25
        const checkboxSize = 10 // Reduced from 12
        const checkboxSpacing = 15 // Reduced from 20
        const checkboxStartX = rightColumnX + 60 // Start after track name

        // Helper function to create a track row
        const createTrackRow = (name: string, y: number) => {
            page.drawText(name, {
                x: rightColumnX,
                y: y,
                size: 14,
                font: boldFont,
                color: BLACK,
            })

            // Create 10 checkboxes
            for (let i = 0; i < 10; i++) {
                const checkbox = form.createCheckBox(`${name.toLowerCase()}_${i}`)
                checkbox.addToPage(page, {
                    x: checkboxStartX + i * checkboxSpacing,
                    y: y - 2, // Align with text
                    width: checkboxSize,
                    height: checkboxSize,
                    borderWidth: 1,
                    borderColor: BLACK,
                    backgroundColor: WHITE,
                })
            }
        }

        // Create all tracks
        createTrackRow("BLOOD", trackStartY)
        createTrackRow("MIND", trackStartY - trackSpacing)
        createTrackRow("ECHO", trackStartY - trackSpacing * 2)
        createTrackRow("FORTUNE", trackStartY - trackSpacing * 3)
        createTrackRow("SUPPLIES", trackStartY - trackSpacing * 4)

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

        // Name
        page.drawText("Name:", {
            x: leftColumnX,
            y: textY,
            size: 12,
            font: boldFont,
            color: BLACK,
        })
        const nameField = form.createTextField("name")
        nameField.setText(character.name)
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
        classField.setText(character.characterClass)
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
        callingField.setText(character.calling)
        callingField.addToPage(page, {
            x: leftColumnX + 60,
            y: textY - lineHeight * 2 - 12,
            width: fieldWidth,
            height: 20,
            borderWidth: 1,
            borderColor: BLACK,
            backgroundColor: WHITE,
        })

        // Calculate section heights
        const sectionHeight = 75
        const sectionSpacing = 35
        let currentY = textY - lineHeight * 3 - sectionSpacing

        // Active Beats
        page.drawRectangle({
            x: leftColumnX,
            y: currentY,
            width: columnWidth - margin * 2,
            height: 30,
            color: DARK_RED,
        })
        page.drawText("ACTIVE BEATS", {
            x: leftColumnX + 10,
            y: currentY + 8,
            size: 14,
            font: boldFont,
            color: WHITE,
        })
        const beatsField = form.createTextField("beats")
        beatsField.enableMultiline()
        changeFontSize(beatsField, 12)
        beatsField.addToPage(page, {
            x: leftColumnX + 1,
            y: currentY - sectionHeight - 2,
            width: columnWidth - margin * 2 - 2,
            height: sectionHeight,
            borderWidth: 1,
            borderColor: BLACK,
            backgroundColor: WHITE,
        })
        currentY -= sectionHeight + sectionSpacing

        // Equipment
        page.drawRectangle({
            x: leftColumnX,
            y: currentY,
            width: columnWidth - margin * 2,
            height: 30,
            color: DARK_RED,
        })
        page.drawText("EQUIPMENT", {
            x: leftColumnX + 10,
            y: currentY + 8,
            size: 14,
            font: boldFont,
            color: WHITE,
        })
        const equipmentField = form.createTextField("equipment")
        equipmentField.enableMultiline()
        changeFontSize(equipmentField, 12)
        equipmentField.addToPage(page, {
            x: leftColumnX + 1,
            y: currentY - sectionHeight - 2,
            width: columnWidth - margin * 2 - 2,
            height: sectionHeight,
            borderWidth: 1,
            borderColor: BLACK,
            backgroundColor: WHITE,
        })
        currentY -= sectionHeight + sectionSpacing

        // Resources
        page.drawRectangle({
            x: leftColumnX,
            y: currentY,
            width: columnWidth - margin * 2,
            height: 30,
            color: DARK_RED,
        })
        page.drawText("RESOURCES", {
            x: leftColumnX + 10,
            y: currentY + 8,
            size: 14,
            font: boldFont,
            color: WHITE,
        })
        const resourcesField = form.createTextField("resources")
        resourcesField.enableMultiline()
        changeFontSize(resourcesField, 12)
        resourcesField.addToPage(page, {
            x: leftColumnX + 1,
            y: currentY - sectionHeight - 2,
            width: columnWidth - margin * 2 - 2,
            height: sectionHeight,
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
        abilitiesField.setText(character.abilities)
        changeFontSize(abilitiesField, 12)
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

function changeFontSize(textField: PDFTextField, size: number) {
    const da = textField.acroField.getDefaultAppearance() ?? ""
    const newDA = da + "\n" + setFontAndSize(StandardFonts.Helvetica, size).toString()
    textField.acroField.setDefaultAppearance(newDA)
}
