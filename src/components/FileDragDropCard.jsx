import '../index.css'
import '../App.css'
import React, { useState } from 'react';
import FileDropZone from './FileDropZone';

const FileDragDropCard = () => {

    const [droppedFiles, setDroppedFiles] = useState([]);
    const [text, setText] = useState([]);

    const handleFilesDrop = (files) => {
        setDroppedFiles(files);
        setText(files.name);
        // Do whatever you need to do with the files in your higher-level component
        console.log('Dropped files:', files);
        
    };

    return (
        <div>
            {/*TODO //add drop down of file names?? */}
            <hr className='hrSection'></hr>
            <div>
                <div className='sectionHeader'>
                    Select a manifest you'd like to import
                </div>
            </div>
            <div style={{borderRadius:"15px"}}>
                <FileDropZone
                    onFilesDrop={handleFilesDrop}
                    
                />
                <div>
                    <button onClick={()=> { }} className= 'buttonFlyHop' style={{width: '50%'}}>Upload Manifest</button>
                </div>
            </div>
            <hr className='hrSection'></hr>
        </div>
    )
}

export default FileDragDropCard;