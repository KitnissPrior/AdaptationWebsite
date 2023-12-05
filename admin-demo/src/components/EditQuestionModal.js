/*import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import { Edit, SimpleForm, TextInput, useNotify, useRefresh, useRedirect } from 'react-admin';

const PostEdit = (props) => {
 const { record, resource } = props;
 const [open, setOpen] = React.useState(false);
 const notify = useNotify();
 const refresh = useRefresh();
 const redirect = useRedirect();

 const handleOpen = () => {
   setOpen(true);
 };

 const handleClose = () => {
   setOpen(false);
 };

 const handleSave = () => {
   setOpen(false);
   refresh();
   notify('Changes saved');
   redirect('/posts');
 };

 return (
   <React.Fragment>
     <button onClick={handleOpen}>Edit</button>
     <Dialog open={open} onClose={handleClose}>
       <DialogTitle>Edit Post</DialogTitle>
       <DialogContent>
         <SimpleForm {...props}>
           <TextInput source="title" />
           <TextInput source="body" />
         </SimpleForm>
       </DialogContent>
       <DialogActions>
         <button onClick={handleClose}>Cancel</button>
         <button onClick={handleSave}>Save</button>
       </DialogActions>
     </Dialog>
   </React.Fragment>
 );
};


export default PostEdit;*/

import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { Edit, SimpleForm, TextInput, useNotify, useRefresh, useRedirect, FunctionField, ListSortContext } from 'react-admin';

const PostEdit = (props) => {
  const { list } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Редактировать ответы
      </Button>
      <Modal title="Тут должно быть редактирование ответов" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Ешь макароны</p>
        <p>Сыпь соль себе в рот</p>
        <p>День твой последний</p>
        <p>Грядет, нищеброд</p>
      </Modal>
    </>
  );
};

export default PostEdit;