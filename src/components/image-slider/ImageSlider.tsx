import React, { useEffect, useState } from 'react';
import "./main.css";

interface ImageItem {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

interface ImageSliderProps {
  url: string;
  page?: number;
  limit?: number;
}

const ImageSlider = ({url, page = 1, limit = 5}: ImageSliderProps) => {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl: string) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data: ImageItem[] = await response.json();
      console.log("Fetched data:", data);

      if (data && data.length > 0) {
        setImages(data);
        setLoading(false);
      } else {
        setLoading(false);
        setErrorMsg("No images found.");
      }
    } catch (e: unknown) {
      setErrorMsg((e as Error).message);
      setLoading(false);
    }
  }

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1 );
  }

  useEffect(() => {
    if (url) fetchImages (url);
  }, [url]);

  if (loading) {
    return <p>Loading data ! Please wait</p>
  }

  if (errorMsg !== null) {
    return <p>Error occured ! {errorMsg}</p>
  }

  if (images.length === 0 && !loading && errorMsg === null) {
      return <p>No images to display. Please check the URL or try again later.</p>
  }

  return (
    <>
      <div className="container">
        <button className='arrow arrow-left' onClick={handlePrevious}>Prev</button>
        {images && images.length > 0 && (
          <img
            key={images[currentSlide].id}
            src={images[currentSlide].download_url}
            alt={images[currentSlide].author || 'Image'}
            className="current-image"
          />
        )}
        <button className='arrow arrow-right' onClick={handleNext}>Next</button>
        
      </div>
    </>
  );
}

export default ImageSlider;