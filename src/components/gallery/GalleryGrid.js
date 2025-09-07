"use client"
import { useState } from "react"
import { galleryData, galleryCategories } from "../../data/galleryData"

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedItem, setSelectedItem] = useState(null)

  const filteredItems =
    activeCategory === "all" ? galleryData : galleryData.filter((item) => item.category === activeCategory)

  const openModal = (item) => {
    setSelectedItem(item)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedItem(null)
    document.body.style.overflow = "unset"
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {galleryCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? "bg-green-600 text-white shadow-lg"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-green-50 hover:border-green-300"
            }`}
          >
            {category.name} ({category.count})
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            onClick={() => openModal(item)}
          >
            <div className="relative aspect-square overflow-hidden">
              {item.type === "video" ? (
                <div className="relative">
                  <img
                    src={item.thumbnail || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-green-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
              <div className="mt-3">
                <span
                  className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                    item.category === "treatments"
                      ? "bg-blue-100 text-blue-800"
                      : item.category === "specializations"
                        ? "bg-purple-100 text-purple-800"
                        : "bg-green-100 text-green-800"
                  }`}
                >
                  {item.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {selectedItem.type === "video" ? (
              <video controls autoPlay className="max-w-full max-h-full rounded-lg" poster={selectedItem.thumbnail}>
                <source src={selectedItem.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={selectedItem.src || "/placeholder.svg"}
                alt={selectedItem.title}
                className="max-w-full max-h-full rounded-lg"
              />
            )}

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-xl font-semibold mb-2">{selectedItem.title}</h3>
              <p className="text-gray-300">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
