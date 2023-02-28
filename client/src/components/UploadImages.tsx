import { Box, IconButton, Stack } from '@mui/material';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { useEffect, useRef, useState } from 'react';

// @ts-ignore
const UploadImages = ({ setImages }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener('change', (event) => {
        if (event.target) {
          const target = event.target as HTMLInputElement;
          const file = target.files?.[0];
          if (file) {
            const fileObj = new Blob([file]);
            // @ts-ignore
            setImages((prev) => [
              ...prev,
              { file, blobUrl: URL.createObjectURL(fileObj) },
            ]);
          }
        }
      });
    }

    return () => {
      if (inputRef.current) {
        inputRef.current?.removeEventListener('change', (event) => {
          if (event.target) {
            const target = event.target as HTMLInputElement;
            const file = target.files?.[0];
            if (file) {
              const fileObj = new Blob([file]);
              // @ts-ignore
              setImages((prev) => [
                ...prev,
                { file, blobUrl: URL.createObjectURL(fileObj) },
              ]);
            }
          }
        });
      }
    };
  }, []);

  return (
    <Box>
      <input ref={inputRef} type={'file'} hidden />
      <IconButton
        onClick={(e) => inputRef.current?.click()}
        sx={{
          mr: '0px',
          color: 'primary.main',
          '&:hover': {
            color: 'primary.main',
          },
        }}
      >
        <InsertPhotoOutlinedIcon />
      </IconButton>
    </Box>
  );
};

export default UploadImages;
