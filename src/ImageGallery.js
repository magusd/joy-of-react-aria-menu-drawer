function ImageGallery({ images }) {
  return (
    <div className="image-gallery-wrapper">
      {images.map((image) => (
        <Image
          key={image.originalSource}
          data={image}
        />
      ))}
    </div>
  )
}

function Image({ data }) {
  return (
    <figure>
      <a
        href={data.originalSource}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={data.src}
          alt={data.alt}
          style={{ aspectRatio: data.aspectRatio }}
        />
      </a>
      <figcaption>
        Photograph by <strong>{data.photographer}</strong>.
      </figcaption>
    </figure>
  )
}

export default ImageGallery;