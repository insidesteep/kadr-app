import React from 'react'


const {
    Provider: StoreServiceProvider,
    Counsumer: StoreServiceConsumer
} = React.createContext()

export {
    StoreServiceProvider,
    StoreServiceConsumer
}