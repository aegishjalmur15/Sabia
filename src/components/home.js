import React , { useState }from  'react';
import '../styles/home.css'
import { BsImages } from "react-icons/bs";
import api from '../services/API'
export default function Home(props){
const [previewImages, setPreviewImages] = useState([]);
const [images, setImages] = useState([]);
const [postContent, setPostContent] = useState('');

const data = new FormData
data.append("id", props.id);
data.append("Content", postContent);
images.forEach(image => data.append("images",image));


function handlePost(){
    api.put('posts', data)
    .then(res=> console.log(res.data))
    .catch(err=> console.log(err))
}
function handleSelecteImages(event){
    if(!event.target.files){
        return;
    }
    const selectedImages = Array.from(event.target.files);
    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map(images=>{
        return URL.createObjectURL(images);
    })
    setPreviewImages(selectedImagesPreview);
    }
    return(
        <div className="homeWrapper">
            <header>
                <h1 className="headerName">Home</h1>
            </header>
            <div className="postForm">
                <div className="imgContainer">
                    <img className="headerImageProfile"src={props.profileImage} alt=""/>
                </div>
                <div className="actionFormContainer">
                    <div className="inputContainer">
                        <textarea className="postInsertion" placeholder="How you doin' ?" onChange={event =>setPostContent(event.target.value)}/>
                    </div>
                    <div className="actionsContainer">
                        <label className="LabelPostImages" htmlFor="postImages">
                            <BsImages size="2rem" color="var(--pre-bottom-color)"/>
                        </label>
                        {
                            previewImages ==false ? (
                            
                            (<></>)):
                            (<div className="previewImagesContainer">
                            {previewImages.map((image=>{
                                return(
                                    <img key={image} src={image} />
                                )
                            }))}
                        </div>)
                        }
                        
                        <input id="postImages"type="file" onChange={handleSelecteImages} multiple/>
                        <button className="submitPost"type="submit" onClick={handlePost}>Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}