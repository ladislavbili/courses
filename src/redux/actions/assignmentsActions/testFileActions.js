import {SET_ASIGNMENTS_TEST_FILE} from '../../types';
import JSZip from 'jszip';

export const assignmentsGetTestFile = () => {
   return (dispatch) => {
     fetch('http://localhost:8081').then((data)=>{
       data.blob().then(newData=>{
         var zip = new JSZip();
         zip.loadAsync(newData)
           .then((files)=>{
             dispatch({ type: SET_ASIGNMENTS_TEST_FILE, file:files });
           })
           .catch((error) => console.log(error))
       })
     })
   };
};

export const assignmentsGetTestFileLocally = () => {
   return (dispatch) => {
     const URL = window.location.href.substring(0,window.location.href.indexOf('/assignments'));
     fetch(URL+'/test.zip', {mode: 'no-cors'}) .then((response)=>{
       response.blob().then((blob)=>{
         var zip = new JSZip();
         zip.loadAsync(blob)
         .then((files)=>{
           dispatch({ type: SET_ASIGNMENTS_TEST_FILE, file:files });
         })
         .catch((error) => console.log(error))
       })
     })
   };
};
