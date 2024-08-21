import { Editor } from '@tinymce/tinymce-react'
import React, { useState } from 'react'
import InputBox from '../../components/inputbox/InputBox'
import DropDown from '../../components/DropDown/DropDown';
import './CreateProfile.css'
import Popup from '../../components/popup/Popup';

import Vector from '../../assets/Vector.png'
import useStoreContext from '../../context';
const topicDetails = [
    { labelName: "Name", enter: "name" },
    { labelName: "Age", enter: "age" },
    { labelName: "City", enter: "city" },
    { labelName: "province", enter: "province" },
    { labelName: "qualification", enter: "qualification" },
    { labelName: "country", enter: "country" },
    { labelName: "Email", enter: "email" },
    { labelName: "Contact", enter: "contact" },
    { labelName: "Designation", enter: "designation" },
    { labelName: "Instagram", enter: "instagram" },
    { labelName: "Facebook", enter: "facebook" },
    { labelName: "Tweet", enter: "tweet" },
    { labelName: "Pinterest", enter: "pinterest" },
    { labelName: "Linkedein", enter: "linkedin" },
    { labelName: "Youtube", enter: "youtube" },
    { labelName: "Short Bio", enter: "short bio" },
    { labelName: "Discription", enter: "discription" },

  ];
  
  const initialDetails = {
    name: "Sabbor Shah",
    age: "21",
    city: "Lahore",
    province: "Punjab",
    Country : 'Pakistan',
    qualification : '' ,
    email :'abc@example.com',
    Contact : '+92 123 4327890',
    designation : 'manager' ,
    instagram  : '',
    facebook  : '',
    tweet  : '',
    pinterest : '',
    linkedin  : '',
    youtube  : '',
    Shortbio: '' ,
    description : 'type here'

    

  };
  
  const options = [
    { label: 'Poem', value: 'poem' },
    { label: 'Story', value: 'story' },
    { label: 'Plays', value: 'plays' },
    { label: 'Film', value: 'film' }
  ];
  
  
export default function CreateProfile() {
    const [editor, setEditor] = useState(initialDetails);
    const {showPopup , setShowPopup} = useStoreContext()

    const handleChange = (e) => {
      const { name, value } = e.target;
      setEditor((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleEditorChange = (content) => {
      setEditor((prev) => ({ ...prev, description: content }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(editor)
      setShowPopup(true)
    };
  
  return (
    <>
         <div className="second-port">
         <div className="container">
          <div className="start-profile">
          <div className="round-i">
            <img src={Vector} alt="" />
          </div>
          <div className="profile-photo">
            <h6>Profile Photo</h6>
            <span>there are no there here for 100 of them to create</span>
            <div className="buttons">
              <button className="btn blue">Update</button>
              <button className="btn red">Remove</button>

            </div>
          </div>
          </div>
         </div>
        <form onSubmit={handleSubmit} className="conta">
          <div className="topic-title">
            {topicDetails.slice(0, 2).map((item, index) => (
              <InputBox
                key={index}
                labelName={item.labelName}
                enter={item.enter}
                value={editor[item.enter]}
                handleChange={handleChange}
              />
            ))}
                {topicDetails.slice(2, 4).map((item, index) => (
                <DropDown
                labelName={item.labelName}
                options={options}
                enter={item.enter}
                value={editor.category}
                handleChange={handleChange}
              />
            ))}
             <DropDown
              labelName='Category'
              options={options}
              enter="category"
              value={editor.category}
              handleChange={handleChange}
            />
               {topicDetails.slice(6, 12).map((item, index) => (
              <InputBox
                key={index}
                labelName={item.labelName}
                enter={item.enter}
                value={editor[item.enter]}
                handleChange={handleChange}
              />
            ))}
          </div>
          <div className="editor-write">
            <label htmlFor="">Description:</label>
            <Editor
              apiKey='65qjhm9c4ulwx4k5ppqfv0i25v6i9m0o92zew32d7035zlzu'
              value={editor.description}
              onEditorChange={handleEditorChange}
              init={{
                plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                tinycomments_mode: 'embedded',
                tinycomments_author: 'Author name',
              }}
            />
          </div>
          <div className="topic-titles e">
            <button className="btn-logins" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
      {showPopup && <Popup />}

    </>
  )
}
