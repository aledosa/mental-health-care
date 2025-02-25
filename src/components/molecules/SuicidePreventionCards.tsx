"use client"

import { Card, CardHeader, CardTitle, CardContent } from "../atoms/CardComponents"
import { Facebook, Phone, Mail, Twitter, Instagram } from "lucide-react"
import { motion } from "framer-motion"

const preventionLines = [
  {
    title: "Salvemos una vida",
    content: [
      { type: "phone", value: "924-59-91" },
      { type: "phone", value: "945-37-77" },
      { type: "phone", value: "075" },
    ],
    social: [{ type: "facebook", value: "Salvemos una Vida Radio" }],
  },
  {
    title: "Programa para la atención del suicidio (PIAS)",
    content: [{ type: "phone", value: "9993 10-36-62" }],
  },
  {
    title: "Secretaría de Salud de Yucatán",
    content: [{ type: "phone", value: "800-000-0779" }],
    description: "Línea gratuita de apoyo a la salud mental",
  },
  {
    title: "Línea de la Vida",
    content: [{ type: "phone", value: "800-911-2000" }],
    social: [
      { type: "facebook", value: "Línea de la Vida" },
      { type: "twitter", value: "@LineaDe_LaVida" },
      { type: "instagram", value: "@LineaDe_LaVida" },
    ],
    email: "lalineadelavida@salud.gob.mx",
  },
  {
    title: "Ayuntamiento de Mérida",
    content: [{ type: "phone", value: "9994-54-10-81" }],
    description: "Líneas de apoyo emocional",
  },
]

export default function SuicidePreventionCards() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {preventionLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="h-full"
          >
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out h-full">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-800">{line.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {line.description && <p className="text-sm mb-4 text-gray-600">{line.description}</p>}
                {line.content.map((item, i) => (
                  <div key={i} className="flex items-center mb-2">
                    <Phone className="mr-2 h-4 w-4 text-blue-500" />
                    <span className="text-gray-700">{item.value}</span>
                  </div>
                ))}
                {line.social && (
                  <div className="mt-4">
                    {line.social.map((item, i) => (
                      <div key={i} className="flex items-center mb-2">
                        {item.type === "facebook" && <Facebook className="mr-2 h-4 w-4 text-blue-600" />}
                        {item.type === "twitter" && <Twitter className="mr-2 h-4 w-4 text-blue-400" />}
                        {item.type === "instagram" && <Instagram className="mr-2 h-4 w-4 text-pink-500" />}
                        <span className="text-gray-700">{item.value}</span>
                      </div>
                    ))}
                  </div>
                )}
                {line.email && (
                  <div className="flex items-center mt-4">
                    <Mail className="mr-2 h-4 w-4 text-blue-500" />
                    <span className="text-gray-700">{line.email}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </>
  )
}

