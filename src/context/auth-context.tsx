import React, { useContext, useEffect, useState } from 'react'
import firebase from 'firebase'
import { auth } from '../firebase-config'
import { Player } from '../model/player/player'

interface AuthContextInterface {
  currentUser: firebase.User | null
  login: (email: string, password: string) => Promise<firebase.auth.UserCredential> | Promise<void>
  signup: (email: string, password: string) => Promise<firebase.auth.UserCredential> | Promise<void>
  logout: () => Promise<void>
  getPlayer: () => Player | null
}

const AuthContext = React.createContext<AuthContextInterface>({
  currentUser: null,
  login(): Promise<firebase.auth.UserCredential> | Promise<void> {
    return Promise.resolve(undefined)
  },
  signup(): Promise<firebase.auth.UserCredential> | Promise<void> {
    return Promise.resolve(undefined)
  },
  logout(): Promise<void> {
    return Promise.resolve(undefined)
  },
  getPlayer(): Player | null {
    return null
  },
})

interface Props {
  children: any
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const signup = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  const login = (email: string, password: string) => {
    return auth.signInWithEmailAndPassword(email, password)
  }

  const logout = () => {
    return auth.signOut()
  }

  const getPlayer = (): Player | null => {
    if (!currentUser || !currentUser.uid || !currentUser.email) {
      return null
    }
    return { uid: currentUser?.uid, email: currentUser?.email }
  }

  useEffect(() => {
    return auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })
  }, [])

  const value = {
    currentUser,
    getPlayer,
    login,
    signup,
    logout,
  }

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}
