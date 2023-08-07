import axios from 'axios';

export default class FinancialYearService {
    getFinancialYears() {
        return axios.get('/assets/demo/data/financial-year.json').then((res) => res.data.data);
    }
}
