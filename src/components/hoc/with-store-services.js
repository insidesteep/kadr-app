import React from 'react'
import { StoreServiceConsumer } from '../store-service-context'

const withStoreService = () => (Wrapped) => {
    
    return class extends React.Component{
        render(){
            return (
                <StoreServiceConsumer>
                    {
                        (storeService) => {
                            return (
                                <Wrapped {...this.props} storeService = {storeService}/>
                            )
                        }
                    }
                </StoreServiceConsumer>
                
            )
        }
    }
}

export default withStoreService