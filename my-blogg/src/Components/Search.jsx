import React, { useState, useContext, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import myContext from '../../../context/data/myContext';
import { Link, useNavigate } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { storage } from '../../../firebase/FirebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { toast } from 'react-toastify';

function CreateBlog() {
    const navigate = useNavigate();
    const context = useContext(myContext);
    const { mode } = context;

    const [blogData, setBlogData] = useState({
        title: "",
        category: "",
        content: "",
        time: Timestamp.now(),
    });
    const [thumbnail, setThumbnail] = useState(null);
    const [text, setText] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBlogData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const addPost = async () => {
        if (!blogData.title || !blogData.category || !blogData.content || !thumbnail) {
            toast.error('Please Fill All Fields');
            return;
        }
        uploadImage();
    };

    useEffect(() => { window.scrollTo(0, 0) }, []);

    const uploadImage = () => {
        if (!thumbnail) return;
        const imageRef = ref(storage, `blogimage/${thumbnail.name}`);
        uploadBytes(imageRef, thumbnail).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                const productRef = collection(fireDb, "blogPost");
                try {
                    addDoc(productRef, {
                        ...blogData,
                        thumbnail: url,
                        time: Timestamp.now(),
                        date: new Date().toLocaleString(
                            "sv-SE",
                            {
                                month: "short",
                                day: "2-digit",
                                year: "numeric",
                            }
                        )
                    });
                    navigate('/dashboard');
                    toast.success('Post Added Successfully');
                } catch (error) {
                    toast.error(error.message);
                    console.log(error);
                }
            });
        });
    };

    return (
        <div className='container mx-auto max-w-5xl py-6'>
            <div className="p-5" style={{
                background: mode === 'dark' ? '#353b48' : 'rgb(226, 232, 240)',
                borderBottom: mode === 'dark' ? '4px solid rgb(226, 232, 240)' : '4px solid rgb(30, 41, 59)'
            }}>
                <div className="mb-2 flex justify-between">
                    <div className="flex gap-2 items-center">
                        <Link to={'/dashboard'}>
                            <BsFillArrowLeftCircleFill size={25} />
                        </Link>
                        <Typography variant="h4" style={{
                            color: mode === 'dark' ? 'white' : 'black'
                        }}>
                            Create blog
                        </Typography>
                    </div>
                </div>
                <div className="mb-3">
                    {thumbnail && <img className="w-full rounded-md mb-3" src={URL.createObjectURL(thumbnail)} alt="thumbnail" />}
                    <Typography variant="small" color="blue-gray" className="mb-2 font-semibold" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                        Upload Thumbnail
                    </Typography>
                    <input
                        type="file"
                        className="shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] placeholder-black w-full rounded-md p-1"
                        style={{ background: mode === 'dark' ? '#dcdde1' : 'rgb(226, 232, 240)' }}
                        onChange={(e) => setThumbnail(e.target.files[0])}
                    />
                </div>
                <div className="mb-3">
                    <input
                        className={`shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 outline-none ${mode === 'dark' ? 'placeholder-black' : 'placeholder-black'}`}
                        placeholder="Enter Your Title"
                        style={{ background: mode === 'dark' ? '#dcdde1' : 'rgb(226, 232, 240)' }}
                        name="title"
                        value={blogData.title}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <input
                        className={`shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 outline-none ${mode === 'dark' ? 'placeholder-black' : 'placeholder-black'}`}
                        placeholder="Enter Your Category"
                        style={{ background: mode === 'dark' ? '#dcdde1' : 'rgb(226, 232, 240)' }}
                        name="category"
                        value={blogData.category}
                        onChange={handleInputChange}
                    />
                </div>
                <Editor
                    apiKey='1b62n1pyl5tq5e6w4whjyn0n3dxzyk1y95lq1avz870xt2bv'
                    onEditorChange={(newValue, editor) => {
                        setBlogData({ ...blogData, content: newValue });
                        setText(editor.getContent({ format: 'text' }));
                    }}
                    init={{
                        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
                        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                        tinycomments_mode: 'embedded',
                        tinycomments_author: 'Author name',
                        mergetags_list: [
                            { value: 'First.Name', title: 'First Name' },
                            { value: 'Email', title: 'Email' },
                        ],
                        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                    }}
                    initialValue="Write Your message here!"
                />
                <Button className="w-full mt-5" onClick={addPost} style={{
                    background: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)',
                    color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)'
                }}>
                    Send
                </Button>
                <div className="">
                    <h2 className="text-center mb-3 text-2xl">Preview</h2>
                    <div className="content">
                        <div
                            className={`[&>h1]:text-[32px] [&>h1]:font-bold [&>h1]:mb-2.5
                            ${mode === 'dark' ? '[&>h1]:text-[#ff4d4d]' : '[&>h1]:text-black'}
                            [&>h2]:text-[24px] [&>h2]:font-bold [&>h2]:mb-2.5
                            ${mode === 'dark' ? '[&>h2]:text-white' : '[&>h2]:text-black'}
                            [&>h3]:text-[18.72] [&>h3]:font-bold [&>h3]:mb-2.5
                            ${mode === 'dark' ? '[&>h3]:text-white' : '[&>h3]:text-black'}
                            [&>h4]:text-[16px] [&>h4]:font-bold [&>h4]:mb-2.5
                            ${mode === 'dark' ? '[&>h4]:text-white' : '[&>h4]:text-black'}
                            [&>h5]:text-[13.28px] [&>h5]:font-bold [&>h5]:mb-2.5
                            ${mode === 'dark' ? '[&>h5]:text-white' : '[&>h5]:text-black'}
                            [&>h6]:text-[10px] [&>h6]:font-bold [&>h6]:mb-2.5
                            ${mode === 'dark' ? '[&>h6]:text-white' : '[&>h6]:text-black'}
                            [&>p]:text-[16px] [&>p]:mb-1.5
                            ${mode === 'dark' ? '[&>p]:text-[#7efff5]' : '[&>p]:text-black'}
                            [&>ul]:list-disc [&>ul]:mb-2
                            ${mode === 'dark' ? '[&>ul]:text-white' : '[&>ul]:text-black'}
                            [&>ol]:list-decimal [&>li]:mb-10
                            ${mode === 'dark' ? '[&>ol]:text-white' : '[&>ol]:text-black'}
                            [&>li]:list-decimal [&>ol]:mb-2
                            ${mode === 'dark' ? '[&>ol]:text-white' : '[&>ol]:text-black'}
                            [&>img]:rounded-lg
                            `}
                            dangerouslySetInnerHTML={{ __html: blogData.content }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateBlog;
