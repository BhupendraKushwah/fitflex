import axios from 'axios';
import errorHandler from './errorHandler';
import successHandler from './successHandler';
import { BASE_URL, CORE_BASE_URL } from '@/api/routesConfig';
import { getAuthenticationToken } from '@/utils/authentication.util';


// Set base URL for Axios
axios.defaults.baseURL = BASE_URL;

/**
 * Dynamically sets headers for API requests based on the current user state.
 * If no JWT token is available, clears the headers.
 * @param {boolean} [isMultipart=false] - Whether the request is multipart (default: false)
 */
function setHeader(isMultipart = false, isBlob = false) {

    const headers = {};
    try {


        if (isBlob) {
            // If is blob, set Content-Type to application/json; charset=utf-8
            axios.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
            axios.defaults.responseType = 'blob';
        } else if (isMultipart) {
            // If multipart, set Content-Type to multipart/form-data
            axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
            axios.defaults.headers['Content-Type'] = 'multipart/form-data';
        } else {
            axios.defaults.headers['Content-Type'] = 'application/json';
            axios.defaults.headers.common['Content-Type'] = "application/json";
            delete axios.defaults.responseType
        }
        // Apply the headers to axios
        axios.defaults.headers.Authorization = getAuthenticationToken()
        axios.defaults.headers.common = { ...headers };
    } catch (error) {
        console.log(error);

    }
}


/**
 * Constructs a fully qualified URL for API requests.
 * @param {string} [routePath=''] - Optional routePath name
 * @returns {string} Constructed URL
 */
function constructUrl(basePath, routePath = '') {
    return new URL(`${basePath}${routePath}`, BASE_URL).toString();
}

/**
 * Handles dispatch actions for API status updates on redux store.
 * @param {string} keyState - API action key state
 * @param {'loading' | 'success' | 'error'} status - Status type
 * @param {string} routePath - API route
 * @param {boolean} [isScroll=false] - Flag for paginated actions
 */




const api = {
    /**
  * Sends a POST request to create a new entity.
  * @param {string} basePath - The base API path (e.g., '/api')
  * @param {string} routePath - The name the of route api. Example: "leads".
  * @param {object} [params={}] - The payload for the request, typically containing the data to be created.
  *   - It will be sent as the `req.body`
  *   - Example format: { name: 'John', age: 30 }
  * @param {string} [keyState='post'] - The key state for redux apiStatus store (default is 'post')
  * @returns {Promise<object>} The API response, including:
  *   - `success`: A boolean indicating if the request was successful.
  *   - `data`: The response data from the server.
  *   - `status`: The HTTP status code returned by the API.
  */
    post: async (routePath, params = {}, keyState = 'post') => {

        try {
            setHeader();
            const url = constructUrl(CORE_BASE_URL, routePath);
            const response = await axios.post(url, params);
            successHandler(response, { notifyOnSuccess: true, notifyOnFailed: true });

            return { success: true, data: response.data, status: response.status };
        } catch (error) {

            return errorHandler(error);
        }
    },

    /**
     * Sends a POST request to create a new entity and handle file downloads.
     * @param {string} basePath - The base API path (e.g., '/api')
     * @param {string} routePath - The name the of route api. Example: "leads".
     * @param {object} [params={}] - The payload for the request, typically containing the data to be created.
     *   - It will be sent as the `req.body`
     *   - Example format: { name: 'John', age: 30 }
     * @param {string} [keyState='post'] - The key state for redux apiStatus store (default is 'post')
     * @returns {Promise<object>} The API response, including:
     *   - `success`: A boolean indicating if the request was successful.
     *   - `data`: The response data from the server.
     *   - `status`: The HTTP status code returned by the API.
     */
    postAndDownload: async (routePath, params = {}, keyState = 'post') => {

        try {
            setHeader(false, true);

            const url = constructUrl(CORE_BASE_URL, routePath);
            const response = await axios.post(url, params);
            successHandler(response, { notifyOnSuccess: true, notifyOnFailed: true });

            return { success: true, data: response.data, status: response.status };
        } catch (error) {

            return errorHandler(error);
        }
    },

    /**
     * Sends a POST request with file uploads.
     * @param {string} routePath - The name the of route api. Example: "leads".
     * @param {object} [params={}] - The payload for the request, typically containing the data to be created.
     *   - For file uploads, `params` should include `FormData` or file data.
     * @param {string} [keyState='post'] - The key state for redux apiStatus store (default is 'post')
     * @returns {Promise<object>} The API response, including:
     *   - `success`: A boolean indicating if the request was successful.
     *   - `data`: The response data from the server.
     *   - `status`: The HTTP status code returned by the API.
     */
    postAndUpload: async (routePath, params = {}, keyState = 'post') => {
        try {
            setHeader(true); // Set multipart headers for file upload
            axios.defaults.headers['Content-Type'] = 'multipart/form-data';
            const url = constructUrl(CORE_BASE_URL, routePath);
            const response = await axios.post(url, params);
            successHandler(response, { notifyOnSuccess: true, notifyOnFailed: true });
            return { success: true, data: response.data, status: response.status };
        } catch (error) {
            return errorHandler(error);
        }
    },

    /**
     * Sends a GET request to retrieve an entity.
     * @param {string} routePath - The name the of route api. Example: "leads" or use "leads/123" for "leads/:id" to send as the `req.params`.
     * @param {object} [params={}] - Query parameters.
     *   - It will be sent as the `req.query`
     *   - Example format: { id: 123 }
     * @param {string} [keyState='get'] - The key state for redux apiStatus store (default is 'get')
     * @returns {Promise<object>} The API response, including:
     *   - `success`: A boolean indicating if the request was successful.
     *   - `data`: The response data from the server.
     *   - `status`: The HTTP status code returned by the API.
     */
    get: async (routePath, params = {}, keyState = 'get') => {
        try {
            setHeader();
            const url = constructUrl(CORE_BASE_URL, routePath);
            const response = await axios.get(url, { params });
            successHandler(response, { notifyOnSuccess: false, notifyOnFailed: true });
            return { success: true, data: response.data, status: response.status };
        } catch (error) {
            return errorHandler(error);
        }
    },

    /**
     * Sends a GET request to retrieve an entity and handle file downloads.
     * @param {string} routePath - The name the of route api. Example: "leads" or use "leads/123" for "leads/:id" to send as the `req.params`.
     * @param {object} [params={}] - Query parameters.
     *   - It will be sent as the `req.query`
     *   - Example format: { id: 123 }
     * @param {string} [keyState='get'] - The key state for redux apiStatus store (default is 'get')
     * @returns {Promise<object>} The API response, including:
     *   - `success`: A boolean indicating if the request was successful.
     *   - `data`: The response data from the server.
     *   - `status`: The HTTP status code returned by the API.
     */
    getAndDownload: async (routePath, params = {}, keyState = 'get') => {
        try {
            setHeader(false, true);
            const url = constructUrl(CORE_BASE_URL, routePath);
            const response = await axios.get(url, { params });
            successHandler(response, { notifyOnSuccess: false, notifyOnFailed: true });
            return { success: true, data: response.data, status: response.status };
        } catch (error) {
            return errorHandler(error);
        }
    },


    /**
     * Sends a PUT request to update an entity.
     * @param {string} routePath - The name the of route api. Example: "leads" or use "leads/123" for "leads/:id" to send as the `req.params`.
     * @param {object} [params={}] - The payload for the request, containing the updated data.
     *   - It will be sent as the `req.query`
     *   - Example format: { name: 'John', age: 31 }
     * @param {string} [keyState='put'] - The key state for redux apiStatus store (default is 'put')
     * @returns {Promise<object>} The API response, including:
     *   - `success`: A boolean indicating if the request was successful.
     *   - `data`: The response data from the server.
     *   - `status`: The HTTP status code returned by the API.
     */
    put: async (routePath, body = {}, query = {}, keyState = 'put') => {
        try {
            setHeader();
            const url = constructUrl(CORE_BASE_URL, routePath);
            const response = await axios.put(url, body, { params: query });
            successHandler(response, { notifyOnSuccess: true, notifyOnFailed: true });

            return { success: true, data: response.data, status: response.status };
        } catch (error) {

            return errorHandler(error);
        }
    },

    /**
     * Sends a PUT request with file entity.
     * @param {string} routePath - The name the of route api. Example: "leads".
     * @param {object} [params={}] - The payload for the request, typically containing the updated data.
     *   - For file uploads, `params` should include `FormData` or file data.
     * @param {string} [keyState='put'] - The key state for redux apiStatus store (default is 'put')
     * @returns {Promise<object>} The API response, including:
     *   - `success`: A boolean indicating if the request was successful.
     *   - `data`: The response data from the server.
     *   - `status`: The HTTP status code returned by the API.
     */
    putAndUpload: async (routePath, params = {}, keyState = 'put') => {
        try {
            setHeader(true); // Set multipart headers for file upload
            const url = constructUrl(CORE_BASE_URL, routePath);
            const response = await axios.put(url, params);
            successHandler(response, { notifyOnSuccess: true, notifyOnFailed: true });
            return { success: true, data: response.data, status: response.status };
        } catch (error) {
            return errorHandler(error);
        }
    },

    /**
     * Sends a DELETE request to remove an entity.
     * @param {string} routePath - The name the of route api. Example: "leads" or use "leads/123" for "leads/:id" to send as the `req.params`.
     * @param {object} [params={}] - Query parameters or body data for the request
     *   - If `params` includes a `query` object, it will be sent as the `req.query`.
     *   - If `params` includes a `body` object, it will be sent as the `req.body`.
     *   -  Example formats:  { query: { id: 123 } } and/or { body: { name: 'John' } }
     * @param {string} [keyState='delete'] - The key state for the API action (default is 'delete')
     * @returns {Promise<object>} The API response, including:
     *   - `success`: A boolean indicating if the request was successful.
     *   - `data`: The response data from the server.
     *   - `status`: The HTTP status code returned by the API.
     */
    delete: async (routePath, params = {}, keyState = 'delete') => {
        try {
            setHeader();
            const url = constructUrl(CORE_BASE_URL, routePath);

            const { query = {}, body = {} } = params;
            const response = await axios.delete(url, { params: query, data: body });
            successHandler(response, { notifyOnSuccess: true, notifyOnFailed: true });
            return { success: true, data: response.data, status: response.status };
        } catch (error) {
            return errorHandler(error);
        }
    },

    /**
     * Sends a GET request to fetch a list of entities (used for tables with pagination).
     * @param {string} routePath - The name the of route api. Example: "leads".
     * @param {object} [params={}] - Query parameters for filtering or pagination.
     *   - It will be sent as the `req.query`
     *   - Example format: { page: 1, size: 10 }
     * @param {string} [keyState='list'] - The key state for redux apiStatus store for redux apiStatus store (default is 'list')
     * @param {boolean} [isScroll=false] - Flag for pagination (set `true` for infinite scroll)
     * @returns {Promise<object>} The API response, including:
     *   - `success`: A boolean indicating if the request was successful.
     *   - `data`: The response data from the server.
     *   - `status`: The HTTP status code returned by the API.
     */
    list: async (routePath, params = {}, keyState = 'list', isScroll = false) => {
        try {
            setHeader();
            const url = constructUrl(CORE_BASE_URL, routePath);
            const response = await axios.get(url, { params });
            successHandler(response, { notifyOnSuccess: false, notifyOnFailed: false });
            return { success: true, data: response.data, status: response.status };
        } catch (error) {
            return errorHandler(error);
        }
    },
};

export default api;
