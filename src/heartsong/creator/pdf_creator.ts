import { PDFDocument, PDFTextField, rgb, setFontAndSize, StandardFonts, PDFPage, PDFForm, PDFFont } from "pdf-lib"
import Logo from "@/assets/logo.png"
import { Character } from "../game_data/character"

const DARK_RED = rgb(0.6, 0.1, 0.1)
const BLACK = rgb(0, 0, 0)
const WHITE = rgb(1, 1, 1)

let font: PDFFont
let boldFont: PDFFont
const width = 595.28
const height = 841.89
const lineHeight = 20
const fieldWidth = 200
const margin = 15
const leftColumnX = margin
const rightColumnX = width / 2 + margin / 2
const columnWidth = width / 2
const logoHeight = 89.35792544570502 // this needs to be updated when logo changes
const textY = height - margin - logoHeight - 50
const sectionSpacing = 35
const sectionHeight = 75

export async function generateCharacterPDF(character: Character): Promise<Uint8Array> {
    try {
        const pdfDoc = await PDFDocument.create()
        const page = pdfDoc.addPage([width, height]) // A4 size

        // Initialize common variables
        font = await pdfDoc.embedFont(StandardFonts.Helvetica)
        boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

        columnWidth
        leftColumnX
        rightColumnX

        // Add website URL in bottom right
        page.drawText("heartsong.odin-matthias.de", {
            x: width - 77,
            y: 5,
            size: 6,
            font: font,
            color: DARK_RED,
        })

        const form = pdfDoc.getForm()

        // Add components
        await addLogo(page, pdfDoc)

        addBasicInfo(page, form, character, textY)

        addLeftColumnSections(page, form, character)
        addResistanceTracks(page, form, character)
        addAbilities(page, form, character)

        return await pdfDoc.save()
    } catch (error) {
        console.error("Error in PDF generation:", { error })
        throw new Error(`Failed to generate PDF: ${error instanceof Error ? error.message : "Unknown error"}`)
    }
}

async function addLogo(page: PDFPage, pdfDoc: PDFDocument) {
    const response = await fetch(Logo)
    const logoBytes = await response.arrayBuffer()
    const logoImage = await pdfDoc.embedPng(new Uint8Array(logoBytes))

    const logoWidth = columnWidth - margin * 2
    const localLogoHeight = (logoWidth * logoImage.height) / logoImage.width
    page.drawImage(logoImage, {
        x: leftColumnX,
        y: page.getHeight() - margin - localLogoHeight,
        width: logoWidth,
        height: localLogoHeight,
    })
}

function addBasicInfo(page: PDFPage, form: PDFForm, character: Character, textY: number) {
    // Name
    page.drawText("Name:", {
        x: leftColumnX,
        y: textY,
        size: 12,
        font: boldFont,
        color: DARK_RED,
    })
    const fieldHeight = 16
    const nameField = form.createTextField("name")
    nameField.setText(character.name)
    nameField.addToPage(page, {
        x: leftColumnX + 60,
        y: textY - 6,
        width: fieldWidth,
        height: fieldHeight,
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
        color: DARK_RED,
    })
    const classField = form.createTextField("class")
    classField.setText(character.characterClass)
    classField.addToPage(page, {
        x: leftColumnX + 60,
        y: textY - lineHeight - 6,
        width: fieldWidth,
        height: fieldHeight,
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
        color: DARK_RED,
    })
    const callingField = form.createTextField("calling")
    callingField.setText(character.calling)
    callingField.addToPage(page, {
        x: leftColumnX + 60,
        y: textY - lineHeight * 2 - 6,
        width: fieldWidth,
        height: fieldHeight,
        borderWidth: 1,
        borderColor: BLACK,
        backgroundColor: WHITE,
    })
}

function addLeftColumnSections(page: PDFPage, form: PDFForm, character: Character) {
    // Active Beats
    const beatsY = textY - lineHeight * 3 - sectionSpacing
    page.drawRectangle({
        x: leftColumnX,
        y: beatsY,
        width: columnWidth - margin * 2,
        height: 30,
        color: DARK_RED,
    })
    page.drawText("ACTIVE BEATS", {
        x: leftColumnX + 10,
        y: beatsY + 8,
        size: 14,
        font: boldFont,
        color: WHITE,
    })
    const beatsField = form.createTextField("beats")
    beatsField.enableMultiline()
    beatsField.setText(character.activeBeats)
    changeFontSize(beatsField, 12)
    beatsField.addToPage(page, {
        x: leftColumnX + 1,
        y: beatsY - sectionHeight,
        width: columnWidth - margin * 2 - 2,
        height: sectionHeight,
        borderWidth: 1,
        borderColor: BLACK,
        backgroundColor: WHITE,
    })

    // Equipment
    const equipmentY = beatsY - sectionHeight - sectionSpacing
    page.drawRectangle({
        x: leftColumnX,
        y: equipmentY,
        width: columnWidth - margin * 2,
        height: 30,
        color: DARK_RED,
    })
    page.drawText("EQUIPMENT", {
        x: leftColumnX + 10,
        y: equipmentY + 8,
        size: 14,
        font: boldFont,
        color: WHITE,
    })
    const equipmentField = form.createTextField("equipment")
    equipmentField.enableMultiline()
    equipmentField.setText(character.equipment)
    changeFontSize(equipmentField, 12)
    equipmentField.addToPage(page, {
        x: leftColumnX + 1,
        y: equipmentY - sectionHeight,
        width: columnWidth - margin * 2 - 2,
        height: sectionHeight,
        borderWidth: 1,
        borderColor: BLACK,
        backgroundColor: WHITE,
    })

    // Resources
    const resourcesY = equipmentY - sectionHeight - sectionSpacing
    page.drawRectangle({
        x: leftColumnX,
        y: resourcesY,
        width: columnWidth - margin * 2,
        height: 30,
        color: DARK_RED,
    })
    page.drawText("RESOURCES", {
        x: leftColumnX + 10,
        y: resourcesY + 8,
        size: 14,
        font: boldFont,
        color: WHITE,
    })
    const resourcesField = form.createTextField("resources")
    resourcesField.enableMultiline()
    resourcesField.setText(character.resources)
    changeFontSize(resourcesField, 12)
    resourcesField.addToPage(page, {
        x: leftColumnX + 1,
        y: resourcesY - sectionHeight,
        width: columnWidth - margin * 2 - 2,
        height: sectionHeight,
        borderWidth: 1,
        borderColor: BLACK,
        backgroundColor: WHITE,
    })
}

function addResistanceTracks(page: PDFPage, form: PDFForm, character: Character) {
    const trackStartY = page.getHeight() - margin - 30
    const trackSpacing = 25
    const checkboxSize = 10
    const checkboxSpacing = 13
    const checkboxStartX = rightColumnX + 60
    const protectionX = checkboxStartX + 10 * checkboxSpacing + 20

    page.drawText("PROTECTIONS", {
        x: protectionX,
        y: trackStartY + 16,
        size: 8,
        font: boldFont,
        color: DARK_RED,
    })

    const createTrackRow = (name: string, y: number) => {
        const resistanceType = name.toLowerCase() as keyof typeof character.stress
        page.drawText(name, {
            x: rightColumnX,
            y: y,
            size: 10,
            font: boldFont,
            color: DARK_RED,
        })

        for (let i = 0; i < 10; i++) {
            const checkbox = form.createCheckBox(`${resistanceType}_${i}`)
            checkbox.addToPage(page, {
                x: checkboxStartX + i * checkboxSpacing,
                y: y - 2,
                width: checkboxSize,
                height: checkboxSize,
                borderWidth: 1,
                borderColor: BLACK,
                backgroundColor: WHITE,
            })
            if (i < character.stress[resistanceType]) {
                checkbox.check()
            }
        }

        for (let i = 0; i < 5; i++) {
            const protectionCheckbox = form.createCheckBox(`${resistanceType}_protection_${i}`)
            protectionCheckbox.addToPage(page, {
                x: protectionX + i * checkboxSpacing,
                y: y - 2,
                width: checkboxSize,
                height: checkboxSize,
                borderWidth: 1,
                borderColor: BLACK,
                backgroundColor: WHITE,
            })
            if (i < character.protections[resistanceType]) {
                protectionCheckbox.check()
            }
        }
    }

    createTrackRow("BLOOD", trackStartY)
    createTrackRow("MIND", trackStartY - trackSpacing)
    createTrackRow("ECHO", trackStartY - trackSpacing * 2)
    createTrackRow("FORTUNE", trackStartY - trackSpacing * 3)
    createTrackRow("SUPPLIES", trackStartY - trackSpacing * 4)
}

function addAbilities(page: PDFPage, form: PDFForm, character: Character) {
    const abilitiesBoxY = page.getHeight() - margin - 180
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

    // Create abilities text field
    const abilitiesField = form.createTextField("abilities")
    abilitiesField.enableMultiline()
    abilitiesField.setText(character.abilities)
    changeFontSize(abilitiesField, 12)
    abilitiesField.addToPage(page, {
        x: rightColumnX + 1,
        y: abilitiesBoxY - abilitiesBoxHeight,
        width: columnWidth - margin * 2 - 2,
        height: abilitiesBoxHeight,
        borderWidth: 1,
        borderColor: BLACK,
        backgroundColor: WHITE,
    })
}

function changeFontSize(textField: PDFTextField, size: number) {
    const da = textField.acroField.getDefaultAppearance() ?? ""
    const newDA = da + "\n" + setFontAndSize(StandardFonts.Helvetica, size).toString()
    textField.acroField.setDefaultAppearance(newDA)
}
