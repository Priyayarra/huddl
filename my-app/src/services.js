import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const get_all_posts = () => 'https://jsonplaceholder.typicode.com/posts'
export const get_post = ({postId}) => `https://jsonplaceholder.typicode.com/posts/${postId}`
export const get_post_user = () => `https://jsonplaceholder.typicode.com/posts?userId={userId}`

export const useDataApi = (initialUrl, initialData) => {
    const [data, setData] = useState(initialData)
    const [url, setUrl] = useState(initialUrl)
    const [counter, setCounter] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [errorResponse, setErrorResponse] = useState(null)
    const doFetchURL = (url) => {
        if (url != null) {
            setUrl(url)
        }
        setCounter(counter + 1)
    }
    useEffect(() => {
        const fetchData = async () => {
            setIsError(false)
            setErrorResponse(null)
            setIsLoading(true)
            try {
                const result = await axios(url)
                setData(result.data)
            } catch (error) {
                setIsError(true)
                if (error.response) {
                    setErrorResponse(error.response)
                }
            }
            setIsLoading(false)
        }
        fetchData()
    }, [url, counter])
    return [{ data, isLoading, isError, errorResponse }, doFetchURL]
}