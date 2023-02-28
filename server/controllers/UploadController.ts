import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dhxxittfv',
  api_key: '912545354453823',
  api_secret: '8J7Q4rsWEr9QcbwZ5sADYbL6gKs',
});

class UploadController {
  async upload(req: any, res: any): Promise<void> {
    const file = req.file;
    const path =
      '/Users/pavel/Documents/GitHub/twitter-clone/server/uploads/' +
      file.originalname;
    const id = String(Math.random() * 10);
    cloudinary.uploader
      .upload_stream({ resource_type: 'auto' }, (error, result) => {
        if (error || !result) {
          return res.status(500).json({ message: 'Upload error' });
        }
        res.json(result.url);
      })
      .end(file.buffer);

    // Generate
    // {
    //   width: 100,
    //   height: 150,
    //   Crop: 'fill',
    // }
    // const url = cloudinary.url();
    // res.json(url);
  }
}

export const UploadCtrl = new UploadController();
