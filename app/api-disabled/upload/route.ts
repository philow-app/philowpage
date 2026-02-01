import { type NextRequest, NextResponse } from "next/server"
import { writeFile, mkdir } from "fs/promises"
import { existsSync } from "fs"
import { join } from "path"

export async function POST(request: NextRequest) {
  console.log("🔥 === API UPLOAD START ===")
  console.log("⏰ Timestamp:", new Date().toISOString())

  try {
    console.log("📥 Parsing FormData...")
    const formData = await request.formData()
    console.log("✅ FormData parsé avec succès")

    // Créer le dossier uploads s'il n'existe pas
    const uploadsDir = join(process.cwd(), "public", "uploads")
    if (!existsSync(uploadsDir)) {
      console.log("📁 Création du dossier uploads...")
      await mkdir(uploadsDir, { recursive: true })
    }

    const uploadedFiles = []
    const timestamp = Date.now()

    // Chercher les fichiers de file_0 à file_19
    for (let i = 0; i < 20; i++) {
      const file = formData.get(`file_${i}`) as File | null
      if (!file) break

      console.log(`--- FICHIER ${i + 1}: ${file.name} ---`)
      console.log("✅ Validation OK")

      // Générer un nom unique
      const filename = `${timestamp}_${i}_${file.name}`
      console.log("📝 Nom:", filename)

      // Convertir en buffer
      console.log("🔄 Conversion...")
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)
      console.log("✅ Buffer:", buffer.length, "bytes")

      // Écrire le fichier
      console.log("💾 Écriture...")
      const filepath = join(uploadsDir, filename)
      await writeFile(filepath, buffer)
      console.log("✅ Écrit")

      // Vérifier que le fichier existe
      if (existsSync(filepath)) {
        console.log("✅ Vérifié")
      } else {
        throw new Error(`Fichier non créé: ${filepath}`)
      }

      uploadedFiles.push({
        filename,
        originalName: file.name,
        size: buffer.length,
      })

      console.log("✅ Fichier", i + 1, "terminé")
    }

    console.log(" 🎉 SUCCÈS!", uploadedFiles.length, "fichiers uploadés")
    console.log("📤 Réponse envoyée")
    console.log("🔥 === API UPLOAD END ===")

    return NextResponse.json({
      success: true,
      files: uploadedFiles,
      message: `${uploadedFiles.length} files uploaded successfully`,
    })
  } catch (error) {
    console.error("❌ Erreur upload:", error)
    const errorMessage = error instanceof Error ? error.message : 'Upload error occurred'
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 })
  }
}
