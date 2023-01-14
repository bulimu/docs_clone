import React, { useState, useEffect, useRef} from 'react';
import ModalComponent from './modal';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


export default function Docs({database}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [title, setTitle] = useState('');
    const collectionRef = collection(database, 'docsData');

    const isMounted = useRef();

    const [docsData, setDocsData] = useState([]);

    let navigate = useNavigate();

    const addData = () => {
        addDoc(collectionRef, {
            title: title
        })
            .then(() => {
                alert('Data Added');
                handleClose()
            })
            .catch(() => {
                alert('Cannot add data')
            })
    };

    const getData = () => {
        onSnapshot(collectionRef, (data) =>{
            setDocsData(data.docs.map((doc) =>{
                return {...doc.data(), id: doc.id}
            }))
        })

    };

    useEffect(() => {
        if(isMounted.current) {
            return
        }
        isMounted.current = true;
        getData()
    }, []);

    const getID = (id) => {
        navigate(`/editDocs/${id}`)
    }

    return (

        <div className='docs-main'>
            <h1>Docs Clone</h1>

            <button className='add-docs' onClick={handleOpen}>
                Add a Document
            </button>

            <ModalComponent
                open ={open}
                setOpen={setOpen}
                title = {title}
                setTitle = {setTitle}
                addData = {addData}
            />

            <div className='grid-main'>
                {docsData.map((doc) => {
                    return (
                        <div className='grid-child' key={doc.id} onClick={()=> getID(doc.id)}>
                            <p>{doc.title}</p>
                            <div dangerouslySetInnerHTML={{__html: doc.docsDesc}} />
                        </div>
                    )
                })}
            </div>
        </div>)

}
