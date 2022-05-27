import React, { useState } from 'react'

export const AuthContext = React.createContext({
    auth: undefined,
    login: () => {},
    logout: () => {}
})

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState(undefined)
    const [searchValue, setSearchValue] = useState('')

    const handleSearch = (e) => {
        setSearchValue(e.nativeEvent.text)
    }

    const login = (user) => {
        setAuth(user)
    }

    const logout = () => {
        setAuth(undefined)
    }

    const valueContext = {
        auth,
        login,
        logout,
        searchValue,
        handleSearch,
    }

    return (
        <AuthContext.Provider value={valueContext}>
            {children}
        </AuthContext.Provider>
    )
}