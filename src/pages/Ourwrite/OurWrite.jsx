import React, {useState } from 'react';
import InputBox from '../../components/inputbox/InputBox';
import { Editor } from '@tinymce/tinymce-react';
import './OurWrite.css';
import DropDown from '../../components/DropDown/DropDown';

const topicDetails = [
  { labelName: "Title", enter: "title" },
  { labelName: "Subtitle", enter: "subtitle" },
  { labelName: "Category", enter: "category" },
];

const initialDetails = {
  title: "",
  subtitle: "",
  description: "type here",
  category: "",
};

const options = [
  { label: 'Poem', value: 'poem' },
  { label: 'Story', value: 'story' },
  { label: 'Plays', value: 'plays' },
  { label: 'Film', value: 'film' }
];

export default function OurWrite() {
  const [editor, setEditor] = useState(initialDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditor((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditorChange = (content) => {
    setEditor((prev) => ({ ...prev, description: content }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(editor);
  };

  return (
    <>
      <div className="second-port">
        <form onSubmit={handleSubmit} className="container sw">
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
          <div className="topic-title">
            <DropDown
              labelName='Category'
              options={options}
              enter="category"
              value={editor.category}
              handleChange={handleChange}
            />
            <button className="btn-login" type="submit">
              Publish
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
