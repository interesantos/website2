'use client'
import Image from 'next/image'
import { useState } from 'react'

const imageFiles = [
  '7-days-1.webp',
  '7-days-2.webp',
  '14-days-1.webp',
  '14-days-2.webp',
  '30-days-1.webp',
  '30-days-2.webp',
  'checkout_laptop-min.webp',
  'delivery_person-min.webp',
  'happy_tourist-min.webp',
  'hero-min.webp',
  'logo.png',
  'smiling_couple-min.webp'
]

export default function TestImages() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Image Accessibility Test</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {imageFiles.map((file) => (
          <div key={file} className="border p-4 rounded-lg">
            <h2 className="font-medium mb-2">{file}</h2>
            
            <div className="mb-2">
              <h3 className="text-sm text-gray-600">Next.js Image Component:</h3>
              <div className="relative h-40 w-full bg-gray-100">
                <div className="relative h-40 w-full">
                  <Image
                    src={`/images/${file}`}
                    alt={file}
                    fill
                    className="object-contain"
                    onError={() => setImageErrors(prev => ({...prev, [file]: true}))}
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm text-gray-600">Regular img tag:</h3>
              {imageErrors[file] ? (
                <div className="h-40 flex items-center justify-center bg-red-50 text-red-500">
                  Failed to load image
                </div>
              ) : (
                <img
                  src={`/images/${file}`}
                  alt={file}
                  className="max-h-40 mx-auto"
                  onError={() => setImageErrors(prev => ({...prev, [file]: true}))}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}