import axios from '@/utils/axios.js';

export const getCodeTemplate = () => {
    return axios.get('/base/codeTemplate')
}