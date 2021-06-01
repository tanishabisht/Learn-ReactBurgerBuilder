# HTTP Requests
We can call HTTP requests by:
1. XMLHTTPRequest
2. Axios `npm i --save axios`

## Axios Interceptors
Function that will execute for every request 
- error handling
- set common headers

```javascript
axios.interceptors.response.use(
    res => return res,
    err => return err
)
```

## Setting Global Config
```javascript
axios.defaults.baseURL = 'https:://demourl.com/'
axios.defaults.headers.common['Authorization'] = 'KEY'
```

## Axios Instances
```javascript
const instance = axios.create({
    baseURL: 'https:://demourl.com/'
})
instance.defaults.headers.common['Authorization'] = 'KEY'
export default instance
```