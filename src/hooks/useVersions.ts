import * as api from '../api'
import { useCallback, useState } from 'react'

export default function useVersions() {
    const [repoVersions, setRepoVersions] = useState<{ [repo: string]: string[] }>({})

    const fetchVersions = useCallback((repo: string) => {
        api.fetchVersions(repo).then((versions: string[]) =>
            setRepoVersions(repoVersions => ({
                ...repoVersions,
                [repo]: versions
            }))
        )
    }, [])

    return { repoVersions, fetchVersions }
}
