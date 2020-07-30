import React, { useState, useCallback } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { Container, Content, CloseButton } from './style';
import { FiX } from 'react-icons/fi';

interface CropperProps {
  src: string;
  setSrc: (image: any) => void;
  setCropper: (cropper: boolean) => void;
  setImg: (image: any) => void;
}

const Cropper: React.FC<CropperProps> = ({ src, setSrc, setCropper, setImg }) => {

  const [image, setImage] = useState<any>(null);
  const [crop, setCrop] = useState<any>({ width: 200, height: 200, aspect: 1 / 1,  });

  //Getting the cropped image and setting as userAvatar in father component
  const getCroppedImg = useCallback(() => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height,
      );

      const base64Image = canvas.toDataURL('image/jpeg');
      setSrc(base64Image);
      setImg('');
    }

    setCropper(false);
  }, [image, crop, setSrc, setImg, setCropper]);

  //Closing the cropper view
  const handleClose = useCallback(() => {
    setCropper(false);
    setImg('');
  }, [setCropper, setImg]);

  return (
    <Container>
      <Content>
        <ReactCrop src={src} onImageLoaded={setImage} crop={crop} onChange={setCrop} />
        <button className='crop-btn' onClick={getCroppedImg}> Recortar </button>
        <CloseButton className='btn-close' onClick={handleClose}><FiX size={26} /></CloseButton>
      </Content>
    </Container>
  )
}

export default Cropper;