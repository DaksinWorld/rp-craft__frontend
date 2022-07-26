import {useState} from "react";

export const useFetching = <T>(callback: (...arg: T[]) => {}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async (...args: T[]) => {
        try {
            setIsLoading(true)
            await callback(...args)
        } catch (e: any) {
            setError(e);
        } finally {
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, error]
}