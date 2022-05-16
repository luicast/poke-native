import React, { useState } from 'react'

export const AuthContext = React.createContext({
    auth: undefined,
    login: () => {},
    logout: () => {}
})

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState(undefined)

    const login = (user) => {
        setAuth(user)
    }

    const logout = () => {
        setAuth(undefined)
    }

    const valueContext = {
        auth,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={valueContext}>
            {children}
        </AuthContext.Provider>
    )
}