import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = ({ sendUrl }) => {
  const [img, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const uploadImage = e => {
    const files = e.target.files[0];
    const formData = new FormData();
    formData.append('upload_preset', 'he585e5l');
    formData.append('file', files);
    setLoading(true);

    axios.post('https://api.cloudinary.com/v1_1/dsc6dlrwc/image/upload', formData)
    .then(res=> {
      sendUrl(res.data.secure_url);
      // setImage(res.data.secure_url)
    })
    .then(setLoading(false))
    .catch(err=> console.log('upload error'));
  }

  return (

    <div>
      <label className="custom-file-upload">
        <input type="file" name="file" onChange={uploadImage} />
      </label>
      { loading ? <h1>Loading...</h1> : <img className="img-fluid"  style={{width: "10%"}} src={img} /> }

    </div>
  )
}

export default ImageUpload;