import axios from 'axios';

const itemCrud = axios.create({
    baseURL:'http://localhost:3000/'
})
export const itemRead = () => itemCrud.get('/posts');
export const itemCreat = data => itemCrud.post('/posts', data);
export const itemDelet = index => itemCrud.delete('/posts/'+ index);
export const itemEdit = (index,data) => itemCrud.put('/posts/'+ index, data);