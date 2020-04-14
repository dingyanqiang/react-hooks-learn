import { stringify } from 'query-string';

import Http from '../utils/http';
export function fetchPost(params) {
	return Http.post('/office/allOffice', stringify(params));
}
export function fetchGet(params) {
	return Http.get('/officeTag', { params });
}