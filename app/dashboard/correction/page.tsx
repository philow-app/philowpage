"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Upload, FileText, Brain, CheckCircle, AlertCircle, Loader2, BookOpen, FileX, Camera, Keyboard } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"
import { CorrectionDisplay } from "@/components/correction-display"

interface ProcessingStep {
  name: string
  status: "pending" | "processing" | "completed" | "error"
  icon: React.ReactNode
  description: string
}

export default function CorrectionPage() {
  const [files, setFiles] = useState<FileList | null>(null)
  const [originalTextFiles, setOriginalTextFiles] = useState<FileList | null>(null) // Pour le texte original en photo
  const [exerciseType, setExerciseType] = useState<"dissertation" | "resume">("dissertation")
  const [textInputMode, setTextInputMode] = useState<"typed" | "photo">("typed") // Pour les résumés
  const [subject, setSubject] = useState(
    "Peut-on dire que l'expérience nous instruit ? Vous vous appuierez sur l'étude de l'œuvre de Jules Verne, Vingt mille lieues sous les mers (1869-1870) et sur celle de l'œuvre de Marlen Haushofer, Le Mur invisible (1963). Vous pourrez aussi vous référer aux extraits de l'œuvre de Georges Canguilhem, La Connaissance de la vie (1965), étudiés en cours.",
  )
  const [isProcessing, setIsProcessing] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  const [steps, setSteps] = useState<ProcessingStep[]>([
    {
      name: "Upload",
      status: "pending",
      icon: <Upload className="h-4 w-4" />,
      description: "Téléchargement des images",
    },
    {
      name: "OCR",
      status: "pending",
      icon: <FileText className="h-4 w-4" />,
      description: "Extraction du texte manuscrit",
    },
    {
      name: "Nettoyage",
      status: "pending",
      icon: <Brain className="h-4 w-4" />,
      description: "Nettoyage et correction du texte",
    },
    {
      name: "Correction IA",
      status: "pending",
      icon: <CheckCircle className="h-4 w-4" />,
      description: "Correction pédagogique par IA",
    },
  ])

  // Mettre à jour les descriptions des étapes selon le type d'exercice
  useEffect(() => {
    setSteps([
      {
        name: "Upload",
        status: "pending",
        icon: <Upload className="h-4 w-4" />,
        description: "Téléchargement des images",
      },
      {
        name: "OCR",
        status: "pending",
        icon: <FileText className="h-4 w-4" />,
        description: exerciseType === "dissertation" 
          ? "Extraction du texte de la dissertation" 
          : textInputMode === "photo"
            ? "Extraction du texte original et du résumé"
            : "Extraction du texte du résumé",
      },
      {
        name: "Nettoyage",
        status: "pending",
        icon: <Brain className="h-4 w-4" />,
        description: "Nettoyage et correction du texte",
      },
      {
        name: "Correction IA",
        status: "pending",
        icon: <CheckCircle className="h-4 w-4" />,
        description: exerciseType === "dissertation" 
          ? "Correction de la dissertation par IA"
          : "Correction du résumé par IA",
      },
    ])
  }, [exerciseType, textInputMode])

  const updateStepStatus = (stepName: string, status: ProcessingStep["status"]) => {
    setSteps((prev) => prev.map((step) => (step.name === stepName ? { ...step, status } : step)))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Files selected:", e.target.files?.length || 0)
    if (e.target.files && e.target.files.length > 0) {
      console.log("📋 Files selected details:")
      for (let i = 0; i < e.target.files.length; i++) {
        const file = e.target.files[i]
        console.log(`   File ${i}: ${file.name}, Size: ${file.size}, Type: ${file.type}`)
      }
      
      // Validate files
      const maxFileSize = 5 * 1024 * 1024 // 5MB
      const maxFiles = 20

      if (e.target.files.length > maxFiles) {
        setError(`Maximum ${maxFiles} images autorisées`)
        return
      }

      for (let i = 0; i < e.target.files.length; i++) {
        const file = e.target.files[i]
        if (file.size > maxFileSize) {
          setError(`Le fichier ${file.name} dépasse 5MB`)
          return
        }
      }

      setFiles(e.target.files)
      setError(null)
      updateStepStatus("Upload", "completed")
    }
  }

  const handleOriginalTextFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Original text files selected:", e.target.files?.length || 0)
    if (e.target.files && e.target.files.length > 0) {
      console.log("📋 Original text files selected details:")
      for (let i = 0; i < e.target.files.length; i++) {
        const file = e.target.files[i]
        console.log(`   File ${i}: ${file.name}, Size: ${file.size}, Type: ${file.type}`)
      }
      
      // Validate files
      const maxFileSize = 5 * 1024 * 1024 // 5MB
      const maxFiles = 10 // Moins pour le texte original

      if (e.target.files.length > maxFiles) {
        setError(`Maximum ${maxFiles} images autorisées pour le texte original`)
        return
      }

      for (let i = 0; i < e.target.files.length; i++) {
        const file = e.target.files[i]
        if (file.size > maxFileSize) {
          setError(`Le fichier ${file.name} dépasse 5MB`)
          return
        }
      }

      setOriginalTextFiles(e.target.files)
      setError(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("🚀 === SUBMIT START ===")
    console.log("📝 Exercise type:", exerciseType)
    console.log("📝 Text input mode:", textInputMode)
    console.log("📁 Files:", files?.length || 0)
    console.log("📁 Original text files:", originalTextFiles?.length || 0)
    console.log("📝 Subject length:", subject.length)

    // Validation des fichiers selon le mode
    if (exerciseType === "resume" && textInputMode === "photo") {
      // Mode résumé avec photo : on a besoin des deux types de fichiers
      if (!originalTextFiles || originalTextFiles.length === 0) {
        setError("Veuillez sélectionner des photos du texte original")
        return
      }
      if (!files || files.length === 0) {
        setError("Veuillez sélectionner des photos de votre résumé")
        return
      }
    } else {
      // Mode normal : un seul type de fichier
      if (!files || files.length === 0) {
        setError("Veuillez sélectionner des images")
        return
      }
    }

    if (!subject.trim()) {
      setError(exerciseType === "dissertation" ? "Veuillez saisir le sujet de la dissertation" : "Veuillez saisir la consigne")
      return
    }

    console.log("✅ Validation passed")
    setIsProcessing(true)
    setError(null)
    setResult(null)

    try {
      // Step 1: Upload files
      updateStepStatus("Upload", "processing")
      console.log("🚀 Starting upload process...")

      const formData = new FormData()
      for (let i = 0; i < files.length; i++) {
        formData.append(`file_${i}`, files[i])
        console.log(`📁 Added file ${i}: ${files[i].name}`)
      }

      console.log("📤 Uploading files...")
      const uploadResponse = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      console.log("📤 Upload response status:", uploadResponse.status)
      if (!uploadResponse.ok) {
        console.error("❌ Upload failed with status:", uploadResponse.status)
        const errorText = await uploadResponse.text()
        console.error("❌ Upload error text:", errorText)
        throw new Error(`Upload failed: ${uploadResponse.status}`)
      }

      const uploadResult = await uploadResponse.json()
      console.log("✅ Upload successful:", uploadResult)
      updateStepStatus("Upload", "completed")

      // Step 2: Process dissertation with progressive updates
      updateStepStatus("OCR", "processing")
      console.log("🔍 Starting processing...")

      const processPayload = {
        files: uploadResult.files,
        subject: subject.trim(),
        type: exerciseType,
        textInputMode: exerciseType === "resume" ? textInputMode : "typed",
      }
      console.log("📦 Process payload:", processPayload)

      const processResponse = await fetch("/api/process-dissertation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(processPayload),
      })

      console.log("🔍 Process response status:", processResponse.status)
      if (!processResponse.ok) {
        console.error("❌ Process failed with status:", processResponse.status)
        const errorText = await processResponse.text()
        console.error("❌ Process error text:", errorText)
        throw new Error(`Processing failed: ${processResponse.status}`)
      }

      const processResult = await processResponse.json()
      console.log("✅ Process result:", processResult)

      if (!processResult.success) {
        console.error("❌ Process result failed:", processResult)
        throw new Error(processResult.error || "Processing failed")
      }

      console.log("✅ Processing successful!")
      
      // Update steps progressively based on successful completion
      updateStepStatus("OCR", "completed")
      
      // Small delay to show OCR completion
      await new Promise(resolve => setTimeout(resolve, 300))
      
      updateStepStatus("Nettoyage", "processing")
      await new Promise(resolve => setTimeout(resolve, 100))
      updateStepStatus("Nettoyage", "completed")
      
      // Small delay to show cleaning completion
      await new Promise(resolve => setTimeout(resolve, 300))
      
      updateStepStatus("Correction IA", "processing")
      await new Promise(resolve => setTimeout(resolve, 100))
      updateStepStatus("Correction IA", "completed")

      console.log("✅ Setting result:", processResult)
      console.log("🔍 Result structure:")
      console.log("   - success:", processResult.success)
      console.log("   - pipeline:", !!processResult.pipeline)
      console.log("   - correction:", !!processResult.pipeline?.correction)
      console.log("   - correction.correction:", !!processResult.pipeline?.correction?.correction)
      console.log("   - correction.grade:", processResult.pipeline?.correction?.grade)
      console.log("   - cleaning:", !!processResult.pipeline?.cleaning)
      setResult(processResult)
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Une erreur inconnue est survenue'
      console.error("❌ === SUBMISSION FAILED ===")
      console.error("❌ Error:", error)
      console.error("❌ Error message:", errorMessage)
      setError(errorMessage)

      // Mark current step as error
      setSteps((prev) => prev.map((step) => (step.status === "processing" ? { ...step, status: "error" } : step)))
    } finally {
      console.log("🏁 === SUBMISSION END ===")
      setIsProcessing(false)
    }
  }

  const getStepIcon = (step: ProcessingStep) => {
    switch (step.status) {
      case "processing":
        return <Loader2 className="h-4 w-4 animate-spin" />
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "error":
        return <AlertCircle className="h-4 w-4 text-red-500" />
      default:
        return step.icon
    }
  }

  const getStepColor = (step: ProcessingStep) => {
    switch (step.status) {
      case "processing":
        return "border-blue-200 bg-blue-50"
      case "completed":
        return "border-green-200 bg-green-50"
      case "error":
        return "border-red-200 bg-red-50"
      default:
        return "border-gray-200 bg-gray-50"
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-serif font-bold text-gray-900">
            {exerciseType === "dissertation" 
              ? "Correction IA de Dissertations Manuscrites"
              : "Correction IA de Résumés Manuscrits"
            }
            <span className="text-red-600 font-bold ml-3">Bientôt disponible</span>
          </h1>
          <p className="text-gray-600 mt-2">
            {exerciseType === "dissertation" 
              ? "Téléchargez les images de votre dissertation manuscrite pour obtenir une correction détaillée par intelligence artificielle"
              : textInputMode === "typed"
                ? "Saisissez la consigne et le texte original, puis téléchargez les images de votre résumé manuscrit pour une correction IA détaillée"
                : "Téléchargez les images du texte original et de votre résumé manuscrit pour obtenir une correction détaillée par intelligence artificielle"
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload Form */}
          <div className="lg:col-span-2">
            <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Téléchargement et Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Type d'exercice</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div 
                      className={`relative cursor-pointer rounded-lg border-2 p-4 transition-all ${
                        exerciseType === "dissertation" 
                          ? "border-blue-500 bg-blue-50 shadow-md" 
                          : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                      }`}
                      onClick={() => setExerciseType("dissertation")}
                    >
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="exerciseType"
                          value="dissertation"
                          checked={exerciseType === "dissertation"}
                          onChange={() => setExerciseType("dissertation")}
                          className="h-4 w-4 text-blue-600"
                        />
                        <BookOpen className={`h-5 w-5 ${exerciseType === "dissertation" ? "text-blue-600" : "text-gray-400"}`} />
                        <div>
                          <div className={`font-medium ${exerciseType === "dissertation" ? "text-blue-900" : "text-gray-700"}`}>
                            Dissertation
                          </div>
                          <div className="text-xs text-gray-500">
                            Analyse argumentée d'un sujet
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div 
                      className={`relative cursor-pointer rounded-lg border-2 p-4 transition-all ${
                        exerciseType === "resume" 
                          ? "border-green-500 bg-green-50 shadow-md" 
                          : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                      }`}
                      onClick={() => setExerciseType("resume")}
                    >
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="exerciseType"
                          value="resume"
                          checked={exerciseType === "resume"}
                          onChange={() => setExerciseType("resume")}
                          className="h-4 w-4 text-green-600"
                        />
                        <FileX className={`h-5 w-5 ${exerciseType === "resume" ? "text-green-600" : "text-gray-400"}`} />
                        <div>
                          <div className={`font-medium ${exerciseType === "resume" ? "text-green-900" : "text-gray-700"}`}>
                            Résumé
                          </div>
                          <div className="text-xs text-gray-500">
                            Synthèse fidèle d'un texte
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {exerciseType === "resume" && (
                  <div>
                    <label className="block text-sm font-medium text-green-700 mb-3">Mode de saisie du texte original</label>
                    <div className="grid grid-cols-2 gap-4">
                      <div 
                        className={`relative cursor-pointer rounded-lg border-2 p-4 transition-all ${
                          textInputMode === "typed" 
                            ? "border-green-500 bg-green-50 shadow-md" 
                            : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                        }`}
                        onClick={() => setTextInputMode("typed")}
                      >
                        <div className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="textInputMode"
                            value="typed"
                            checked={textInputMode === "typed"}
                            onChange={() => setTextInputMode("typed")}
                            className="h-4 w-4 text-green-600"
                          />
                          <Keyboard className={`h-5 w-5 ${textInputMode === "typed" ? "text-green-600" : "text-gray-400"}`} />
                          <div>
                            <div className={`font-medium ${textInputMode === "typed" ? "text-green-900" : "text-gray-700"}`}>
                              Saisie manuelle
                            </div>
                            <div className="text-xs text-gray-500">
                              Taper le texte à résumer
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div 
                        className={`relative cursor-pointer rounded-lg border-2 p-4 transition-all ${
                          textInputMode === "photo" 
                            ? "border-green-500 bg-green-50 shadow-md" 
                            : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                        }`}
                        onClick={() => setTextInputMode("photo")}
                      >
                        <div className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="textInputMode"
                            value="photo"
                            checked={textInputMode === "photo"}
                            onChange={() => setTextInputMode("photo")}
                            className="h-4 w-4 text-green-600"
                          />
                          <Camera className={`h-5 w-5 ${textInputMode === "photo" ? "text-green-600" : "text-gray-400"}`} />
                          <div>
                            <div className={`font-medium ${textInputMode === "photo" ? "text-green-900" : "text-gray-700"}`}>
                              Photo du texte
                            </div>
                            <div className="text-xs text-gray-500">
                              Prendre en photo le texte
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    exerciseType === "dissertation" ? "text-blue-700" : "text-green-700"
                  }`}>
                    <div className="flex items-center gap-2">
                      {exerciseType === "dissertation" ? (
                        <BookOpen className="h-4 w-4" />
                      ) : textInputMode === "typed" ? (
                        <Keyboard className="h-4 w-4" />
                      ) : (
                        <Camera className="h-4 w-4" />
                      )}
                      {exerciseType === "dissertation" 
                        ? "Sujet de la dissertation" 
                        : textInputMode === "typed" 
                          ? "Consigne et texte original" 
                          : "Consigne du résumé"
                      }
                    </div>
                  </label>
                  {(exerciseType === "dissertation" || textInputMode === "typed") && (
                    <Textarea
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder={
                        exerciseType === "dissertation" 
                          ? "Saisissez le sujet de votre dissertation..." 
                          : "Saisissez la consigne et le texte original à résumer..."
                      }
                      className={`min-h-[120px] transition-colors ${
                        exerciseType === "dissertation" 
                          ? "border-blue-200 focus:border-blue-500 focus:ring-blue-500" 
                          : "border-green-200 focus:border-green-500 focus:ring-green-500"
                      }`}
                      required
                    />
                  )}
                  {exerciseType === "resume" && textInputMode === "photo" && (
                    <div className="border-2 border-dashed border-green-300 rounded-lg p-6 text-center bg-green-50">
                      <Camera className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <p className="text-sm text-green-700 mb-2">
                        Pour les résumés avec texte en photo, saisissez seulement la consigne ici
                      </p>
                      <Textarea
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Ex: Résumez ce texte en 150 mots maximum..."
                        className="min-h-[80px] border-green-200 focus:border-green-500 focus:ring-green-500"
                        required
                      />
                      <p className="text-xs text-green-600 mt-2">
                        Le texte original sera extrait des photos ci-dessus
                      </p>
                    </div>
                  )}
                </div>

                {exerciseType === "resume" && textInputMode === "photo" ? (
                  // Mode résumé avec texte en photo - Deux champs séparés
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-green-700">
                        <div className="flex items-center gap-2">
                          <Camera className="h-4 w-4" />
                          Photos du texte original à résumer (max 10 images, 5MB chacune)
                        </div>
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleOriginalTextFileChange}
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium transition-colors file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                        required
                      />
                      {originalTextFiles && originalTextFiles.length > 0 && (
                        <p className="text-sm text-green-600 mt-2">
                          ✓ {originalTextFiles.length} image(s) du texte original sélectionnée(s)
                        </p>
                      )}
                      <p className="text-xs text-green-600 mt-1">
                        Photographiez toutes les pages du texte à résumer
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-green-700">
                        <div className="flex items-center gap-2">
                          <Upload className="h-4 w-4" />
                          Photos de votre résumé manuscrit (max 20 images, 5MB chacune)
                        </div>
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleFileChange}
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium transition-colors file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                        required
                      />
                      {files && files.length > 0 && (
                        <p className="text-sm text-green-600 mt-2">
                          ✓ {files.length} image(s) de votre résumé sélectionnée(s)
                        </p>
                      )}
                      <p className="text-xs text-green-600 mt-1">
                        Photographiez votre résumé manuscrit
                      </p>
                    </div>
                  </>
                ) : (
                  // Mode dissertation ou résumé avec saisie manuelle - Un seul champ
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      exerciseType === "dissertation" ? "text-blue-700" : "text-green-700"
                    }`}>
                      <div className="flex items-center gap-2">
                        <Upload className="h-4 w-4" />
                        {exerciseType === "dissertation" 
                          ? "Images de la dissertation" 
                          : "Images du résumé manuscrit"
                        } (max 20 images, 5MB chacune)
                      </div>
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleFileChange}
                      className={`block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium transition-colors ${
                        exerciseType === "dissertation" 
                          ? "file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" 
                          : "file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                      }`}
                      required
                    />
                    {files && files.length > 0 && (
                      <p className="text-sm text-green-600 mt-2">
                        ✓ {files.length} image(s) sélectionnée(s)
                      </p>
                    )}
                  </div>
                )}

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-red-700 text-sm">{error}</p>
                  </div>
                )}

                <Button 
                  type="submit" 
                  disabled={true}
                  className={`w-full transition-colors opacity-50 cursor-not-allowed ${
                    exerciseType === "dissertation" 
                      ? "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500" 
                      : "bg-green-600 hover:bg-green-700 focus:ring-green-500"
                  }`}
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Traitement en cours...
                    </>
                  ) : (
                    <>
                      <Brain className="mr-2 h-4 w-4" />
                      Corriger {exerciseType === "dissertation" ? "la dissertation" : "le résumé"}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          </div>

          {/* Processing Steps */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Étapes de traitement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={step.name} className={`p-4 rounded-lg border ${getStepColor(step)}`}>
                    <div className="flex items-center gap-3">
                      {getStepIcon(step)}
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{step.name}</h3>
                        <p className="text-sm text-gray-600">{step.description}</p>
                      </div>
                      <div className="text-sm text-gray-500">
                        {step.status === "completed" && "✓"}
                        {step.status === "error" && "✗"}
                        {step.status === "processing" && "..."}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results */}
        {result && result.success && (
          <>
            {result.pipeline.correction.grade === 0 && (
              <div className="p-4 bg-orange-50 border border-orange-200 rounded-md">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-orange-800">Note de 0/20 attribuée</h3>
                    <p className="text-orange-700 text-sm mt-1">
                      L'IA a détecté que le texte extrait n'est pas adapté pour un résumé (texte légal, notice, etc.). 
                      Vérifiez que vos images contiennent bien le texte à résumer.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Debug section showing extracted text */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Texte extrait par OCR
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Texte brut extrait :</strong> {result.pipeline.cleaning?.cleanedText?.length || 0} caractères
                  </p>
                  <div className="bg-white p-3 rounded border max-h-40 overflow-y-auto">
                    <pre className="text-xs text-gray-800 whitespace-pre-wrap">
                      {result.pipeline.cleaning?.cleanedText || "Aucun texte extrait"}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <CorrectionDisplay
              correction={result.pipeline.correction.correction}
              grade={result.pipeline.correction.grade}
              subject={subject}
              cleanedText={result.pipeline.cleaning?.cleanedText || ""}
              exerciseType={exerciseType}
              stats={{
                textExtracted: result.summary.textExtracted,
                processingTime: result.summary.processingTime,
                filesProcessed: result.summary.filesProcessed,
                totalFiles: result.summary.totalFiles
              }}
            />
          </>
        )}

        {/* Preview Banner */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-6 mt-12">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <span className="text-3xl">🚀</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Fonctionnalité en développement</h3>
              <p className="text-amber-800">
                La correction IA par intelligence artificielle sera bientôt disponible ! Cette fonctionnalité vous permettra de corriger vos dissertations et résumés manuscrits avec une analyse détaillée et personnalisée.
              </p>
              <p className="text-amber-700 text-sm mt-3 italic">
                Ce que vous voyez ici est une preview de ce que la plateforme offrira très bientôt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
