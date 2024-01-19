const {createApp} = Vue

const app = createApp({
    data(){
        return {
            message: 'Hello Vue!',
            image: 'https://cdn-img-b.facciabuco.com/236/fkoth4upqd-scimmia-che-ride-mostrando-tutti-i-denti-ah-raga-io-non-riesco-ad-interagire-con_a.jpg'
        }
    }
})

app.mount("#root")